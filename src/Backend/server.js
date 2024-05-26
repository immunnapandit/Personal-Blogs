const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contact');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/contact-form', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/submit-form', contactRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
