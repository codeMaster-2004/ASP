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
//service_mb1ia6c
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/send-email-export', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            
            if (!response.ok) {
                console.error('Server error:', data);
                throw new Error(data.error || 'Failed to send email');
            }

            setStatus('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            if (formRef.current) {
                formRef.current.reset();
            }
        } catch (error) {
            console.error('Error details:', error);
            setStatus(`Failed to send message: ${error.message}`);
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