const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');

// My modules
const connectDB = require('./core/db');
const createRoutes = require('./core/routes');

// Config
require('dotenv').config({
  path: 'src/config/keys.env',
});

// App init
const app = express();

app.use(express.json());
// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Config for only development
if (process.env.NODE_ENV === 'development') {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );

  app.use(morgan('dev'));
}

// Connect to MongoDB
connectDB();

// Register routes
createRoutes(app);

// Setup server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  try {
    console.log(`Server up and running on port ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
