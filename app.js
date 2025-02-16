require('dotenv').config();



// app.js
// If you're using a .env file, uncomment the next line:
// require('dotenv').config();

const express = require('express');
const pool = require('./db');  // Import the db module
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  try {
    // Run a test query
    const result = await pool.query('SELECT NOW()');
    res.send(`Connected to YugabyteDB, current time: ${result.rows[0].now}`);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Error connecting to the database');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


