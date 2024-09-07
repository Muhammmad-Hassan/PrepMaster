const express = require('express');
const { signup } = require('../controllers/authController');
const router = express.Router();

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', signup);

module.exports = router;
