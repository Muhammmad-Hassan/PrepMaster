const bcrypt = require('bcrypt');
const User = require('../models/User');

// Handle user signup
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  // Check if email already exists
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    // Save user to the database
    await newUser.save();

    return res.status(201).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Server error' });
  }
};
