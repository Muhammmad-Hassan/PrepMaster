const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const jwt = require("jsonwebtoken")
const Teacher = require("../models/UserModel")

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


// Handle User sigin
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    return res.status(200).json({ message: 'Sign in successful', token });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Server error' });
  }
};



exports.teacherSignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find teacher by email
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: teacher._id, email: teacher.email },
      process.env.JWT_SECRET, // Ensure this is set in your environment variables
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};






// Teacher SignUp
exports.teacherSignUp = async (req, res) => {
  const { name, email, password, testSeries } = req.body;

  try {
    // Check if the teacher already exists
    let teacher = await Teacher.findOne({ email });
    if (teacher) {
      return res.status(400).json({ message: "Teacher already exists" });
    }

    // Create a new teacher
    teacher = new Teacher({
      name,
      email,
      password,
      testSeries,
    });

    // Save the teacher to the database
    await teacher.save();

    res.status(201).json({ message: "Teacher signup successful", teacher });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
};




