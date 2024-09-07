const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected successfully');
}).catch((error) => {
  console.error('Database connection error:', error);
});

// Routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
