const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 0;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: `"${name}" <${email}>`,
            to: 'office@analyticalscientificproducts.com',
            replyTo: email,
            subject: 'New Contact Form Submission',
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
            `,
            html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});