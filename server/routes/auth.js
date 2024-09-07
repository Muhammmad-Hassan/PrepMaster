const express = require('express');
const { signup , signin ,teacherSignUp , teacherSignIn} = require('../controllers/authController');
const router = express.Router();

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.post('/signup', signup);
router.post('/signin', signin);
router.post("/teacher-signup", teacherSignUp);
router.post('/teacher-signin', teacherSignIn);


module.exports = router;
