const express = require('express');
const mysql = require('mysql2');


const app = express();
const port = 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'P@#andit@#001',
  database: 'contact_form_db'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route to handle form submissions
app.post('/submit', (req, res) => {
  const { name, email, subject, message } = req.body;
  const sql = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error('Error inserting message: ' + err.stack);
      res.status(500).send('Error submitting message');
      return;
    }
    console.log('Message submitted successfully');
    res.send('Message submitted successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
