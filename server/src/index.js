const express = require('express');
const mongoose = require('mongoose');

const connectDB = require('./core/db');

// Config
require('dotenv').config({
  path: 'src/config/keys.env',
});

// App init
const app = express();

app.use(express.json());

// Connect to MongoDB
connectDB();

// Setup server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  try {
    console.log(`Server up and running on port ${PORT}`);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});
