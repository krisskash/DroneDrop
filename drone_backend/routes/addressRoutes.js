const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Update Address
router.post('/address/:userId', async (req, res) => {
  const userId = req.params.userId || req.session.userId; // User ID from URL params or session

  if (!userId) {
    return res.status(401).json({ status: 401, error: 'Not logged in or no user ID provided' });
  }

  // Destructure required fields from the request body
  const { street, city, state, zip } = req.body;

  // Validate required fields
  if (!street || !city || !state || !zip) {
    return res.status(400).json({
      status: 400,
      error: 'All fields (street, city, state, zip) are required',
    });
  }

  try {
    // Find user and update address
    const user = await User.findByIdAndUpdate(
      userId,
      { 'address.street': street, 'address.city': city, 'address.state': state, 'address.zip': zip },
      { new: true } // return updated user
    );

    if (!user) {
      return res.status(404).json({ status: 404, error: 'User not found' });
    }

    res.status(200).json({ status: 200, message: 'Address updated successfully', address: user.address });
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
  }
});

// Get Profile (to get address)
router.get('/profile/:userId', async (req, res) => {
  const userId = req.params.userId || req.session.userId; // User ID from URL params or session

  if (!userId) {
    return res.status(401).json({ status: 401, error: 'Not logged in or no user ID provided' });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ status: 404, error: 'User not found' });
    }

    res.status(200).json({
      status: 200,
      user: {
        name: user.name,
        email: user.email,
        address: user.address || 'No address set yet',
      },
    });
  } catch (err) {
    res.status(500).json({ status: 500, error: err.message });
  }
});

module.exports = router;
