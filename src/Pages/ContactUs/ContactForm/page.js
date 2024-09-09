import React, { useState, useRef } from 'react';
import './page.css'; 

function ContactBottom() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            console.log('Submitting form data:', formData);
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            let data;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                data = await response.json();
            } else {
                // If the response is not JSON, read it as text
                const text = await response.text();
                console.error('Received non-JSON response:', text);
                throw new Error('Received non-JSON response from server');
            }
            console.log('Server response:', data);

            if (response.ok) {
                setStatus(data.message || 'Email sent successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
                if (formRef.current) {
                    formRef.current.reset();
                }
            } else {
                console.error('Server error:', data);
                setStatus(data.message || 'Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setStatus('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='contact-form'>
            <div className='contact-form-container'>
                <div className='contact-form-container-closeup'>
                    <h1>Contact Us.</h1>
                    <form ref={formRef} className='contact-form-input' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit" disabled={status === 'Sending...'}>
                            {status === 'Sending...' ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                    {status && <p className={`status-message ${status.includes('successfully') ? 'success' : 'error'}`}>{status}</p>}
                </div>
            </div>
        </div>
    );
}

export default ContactBottom;