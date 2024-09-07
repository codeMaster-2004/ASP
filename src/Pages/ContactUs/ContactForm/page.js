// ContactForm.js
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
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Email sent successfully!');
                // Clear the form
                setFormData({ name: '', email: '', phone: '', message: '' });
                // Also reset the form using the DOM API for immediate visual feedback
                if (formRef.current) {
                    formRef.current.reset();
                }
            } else {
                setStatus('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
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
                        <button type="submit">Submit</button>
                    </form>
                    {status && <p className="status-message">{status}</p>}
                </div>
            </div>
        </div>
    );
}

export default ContactBottom;