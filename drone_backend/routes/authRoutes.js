const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Register a new user (no password hashing)
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    
    const newUser = new User({ email, password, name });
    await newUser.save();

    res.status(201).json({
      status: 201,
      message: 'User registered successfully',
      data: newUser,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: 'Failed to register user',
      error: err.message,
    });
  }
});

// Login a user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: 'User not found',
      });
    }

  
    if (user.password !== password) {
      return res.status(400).json({
        status: 400,
        message: 'Invalid credentials',
      });
    }

    // Save user session
    req.session.user = {
      id: user._id,
      email: user.email,
      name: user.name,
    };

    res.status(200).json({
      status: 200,
      message: 'Login successful',
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: 'Server error during login',
      error: err.message,
    });
  }
});

// Logout a user
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        status: 500,
        message: 'Failed to logout',
        error: err.message,
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Logout successful',
    });
  });
});


// Get user session details (Optional, for checking if the user is logged in)
router.get('/session', (req, res) => {
  if (req.session.user) {
    res.status(200).json({
      status: 200,
      message: 'User is logged in',
      data: req.session.user,
    });
  } else {
    res.status(401).json({
      status: 401,
      message: 'No active session',
    });
  }
});

module.exports = router;
