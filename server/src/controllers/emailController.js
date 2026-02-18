const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    }
});

const sendContactEmail = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'Missing required fields' });
        }

        // Email to you (admin)
        const adminMailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><em>Sent on ${new Date().toLocaleString()}</em></p>
            `
        };

        // Confirmation email to user
        const userMailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: 'We received your message!',
            html: `
                <h2>Thank you for reaching out!</h2>
                <p>Hi ${name},</p>
                <p>I've received your message and will get back to you as soon as possible.</p>
                <hr>
                <p><strong>Your Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p>Best regards,<br>Deep</p>
            `
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        res.status(200).json({ 
            success: true, 
            message: 'Emails sent successfully!' 
        });
    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to send email: ' + error.message 
        });
    }
};

module.exports = { sendContactEmail };