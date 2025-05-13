import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config(); // loads .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // allows frontend to talk to this server
app.use(express.json()); // parses incoming JSON

const Message = mongoose.model('Message', {
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

// Route to handle contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {

    await new Message({ name, email, message }).save();
    // create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,       // your Gmail
        pass: process.env.EMAIL_PASS,       // Gmail App Password
      },
    });

    


    // send email
    await transporter.sendMail({
      from: email,
      to: process.env.TO_EMAIL,             // where you want to receive messages
      subject: `New Contact From ${name}`,
      text: message,
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));


// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
