import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Add CORS headers if needed
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body;

    // Input validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        error: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Invalid email format',
        error: 'Please provide a valid email address' 
      });
    }

    try {
      // Create transporter once
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'contactus.ascientificproducts@gmail.com',
          pass: process.env.GMAIL_APP_PASSWORD
        },
        // Add error handling for transport
        tls: {
          rejectUnauthorized: false // For development only - remove in production
        },
        pool: true, // Use pooled connections
        maxConnections: 1, // Limit concurrent connections
        rateDelta: 20000, // Time between emails
        rateLimit: 5 // Max emails per rateDelta
      });

      // Verify transporter
      await transporter.verify();

      const mailOptions = {
        from: '"Contact Form" <contactus.ascientificproducts@gmail.com>',
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
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
            <div style="margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="color: #666; font-size: 12px; margin-top: 20px; padding-top: 10px; border-top: 1px solid #eee;">
              <p>This email was sent from the ASP contact form.</p>
            </div>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);
      
      // Success response
      return res.status(200).json({
        message: 'Email sent successfully',
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('Email error:', {
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });

      // Error response
      return res.status(500).json({
        message: 'Failed to send email',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
        timestamp: new Date().toISOString()
      });
    }
  } else {
    // Method not allowed response
    return res.status(405).json({ 
      message: `Method ${req.method} Not Allowed`,
      allowedMethods: ['POST']
    });
  }
}