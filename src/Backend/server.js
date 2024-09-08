import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Create a Nodemailer transporter
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'contactus.ascientificproducts@gmail.com',
          pass: process.env.GMAIL_APP_PASSWORD
        }
      });
    } catch (error) {
      console.error('Error creating transporter:', error);
      return res.status(500).json({ message: 'Error setting up email service', error: error.message });
    }

    // Email content
    let mailOptions = {
      from: '"Contact Form" <contactus.ascientificproducts@gmail.com>',
      to: 'office@analyticalscientificproducts.com',
      replyTo: email,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<h2>New Contact Form Submission</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong></p><p>${message}</p>`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}