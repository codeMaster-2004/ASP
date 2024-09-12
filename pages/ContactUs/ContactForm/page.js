import React, { useState, useRef } from 'react';
import styles from './page.module.css'; 

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
        <div className={styles.contactForm}>
            <div className={styles.contactFormContainer}>
                <div className={styles.contactFormContainerCloseup}>
                    <h1>Contact Us.</h1>
                    <form ref={formRef} className={styles.contactFormInput} onSubmit={handleSubmit}>
                        <input
                            id={styles.contactInput}
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            id={styles.contactInput}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            id={styles.contactInput}
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            id={styles.messageBody}
                            name="message"
                            placeholder="Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button id={styles.submitButtonContact} type="submit" disabled={status === 'Sending...'}>
                            {status === 'Sending...' ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                    {status && <p className={`${styles.statusMessage} ${status.includes('successfully') ? styles.success : styles.error}`}>{status}</p>}
                </div>
            </div>
        </div>
    );
}

export default ContactBottom;