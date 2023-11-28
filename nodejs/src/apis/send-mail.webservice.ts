import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// ... (your existing API routes)

// POST request to handle form data and send an email
router.post('/sendEmail', async (req, res) => {
  const { name, firm, product, amount, road, plz, city, email, message } =
    req.body;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'YourEmailService', // e.g., 'Gmail', 'SendGrid'
    auth: {
      user: 'your-email@example.com', // Your email address
      pass: 'your-password', // Your email password or an app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: 'recipient@example.com', // Receiver's email address
    subject: 'New Form Submission',
    html: `
      <h3>Form Data</h3>
      <p>Name: ${name}</p>
      <p>Firm: ${firm}</p>
      <p>Product: ${product}</p>
      <p>Amount: ${amount}</p>
      <p>Road: ${road}</p>
      <p>PLZ: ${plz}</p>
      <p>City: ${city}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

export default router;
