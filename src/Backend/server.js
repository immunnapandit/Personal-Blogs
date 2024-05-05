const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); // Add this line to import the CORS middleware

const app = express();
const port = 3001; // Use any port you prefer

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@#andit@#001',
    database: 'my_database'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.use(cors({
  origin: 'http://your-frontend-domain.com'
})); // Add this line to enable CORS for all origins
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
