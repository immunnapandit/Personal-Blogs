const express = require('express');
const router = express.Router();
const Contact = require('../Models/Contaact');

router.post('/submit-form', async (req, res) => {
    const { name, email, subject, message } = req.body;

    const newContact = new Contact({
        name,
        email,
        subject,
        message
    });

    try {
        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error sending message. Please try again later.' });
    }
});

module.exports = router;
