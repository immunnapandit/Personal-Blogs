const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 3001; // Use any port you prefer

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

// Use the cors middleware with specific options
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const { name, email, subject, message } = req.body;
    const sql = 'INSERT INTO contact_form (name, email, subject, message) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, subject, message], (err, result) => {
        if (err) {
            console.error('Error inserting into database:', err);
            res.status(500).json({ error: 'An error occurred while saving data' });
            return;
        }
        console.log('Data inserted into database');
        res.json({ message: 'Form submitted successfully!' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
