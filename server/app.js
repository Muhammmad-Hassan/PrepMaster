const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
require("./config/db")
// Dummy database for demonstration

// @route   POST /api/auth/signup
// @desc    Register new user
// @access  Public
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  // Check if email is valid (basic check, for demonstration purposes)
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please include a valid email' });
  }

  // Check password length
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }

  try {
    // Check if user already exists
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Store user (in a real app, save to DB)
    const newUser = { name, email, password: hashedPassword };
    users.push(newUser);

    res.status(201).json({ message: 'User signed up successfully!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});


router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  try {
    // Find user
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'User signed in successfully!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
