const express = require('express');
const cors = require('cors');
require('dotenv').config();
require("./config/db")
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database


// Routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
