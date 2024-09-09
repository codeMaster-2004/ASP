import React, { useState, useRef } from 'react';
import './page.module.css'; 

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
            const response = await fetch('/api/send-email-export', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Server response:', data);
    
            setStatus(data.message || 'Email sent successfully!');
            setFormData({ name: '', email: '', phone: '', message: '' });
            if (formRef.current) {
                formRef.current.reset();
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
                            id="contact-input"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            id="contact-input"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            id="contact-input"
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            id="message-body"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button id="submit-button-contact" type="submit" disabled={status === 'Sending...'}>
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