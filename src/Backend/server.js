// pages/api/send-email-export.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('API Route hit!'); // Debug log
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Log environment variables (excluding sensitive data)
    console.log('Environment check:', {
      hasEmailUser: !!process.env.EMAIL_USER,
      hasAppPassword: !!process.env.GMAIL_APP_PASSWORD,
      hasRecipient: !!process.env.EMAIL_RECIPIENT
    });

    const { name, email, phone, message } = req.body;
    console.log('Received form data:', { name, email, phone, messageLength: message?.length });

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      },
      debug: true, // Enable debug logs
      logger: true // Enable logger
    });

    // Verify transporter
    console.log('Verifying transporter...');
    await transporter.verify();
    console.log('Transporter verified successfully');

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
      replyTo: email,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    console.log('Attempting to send email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    res.status(200).json({ 
      message: 'Email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    // Detailed error logging
    console.error('Email error:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      command: error.command,
      responseCode: error.responseCode
    });

    // Send a more detailed error response
    res.status(500).json({
      message: 'Failed to send email',
      error: process.env.NODE_ENV === 'development' 
        ? error.message 
        : 'Internal server error',
      code: error.code || 'UNKNOWN_ERROR'
    });
  }
}