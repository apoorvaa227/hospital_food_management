const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');

// Example of a protected route
router.get('/protected-route', authenticate, (req, res) => {
  res.send(`Welcome, ${req.user.name}`);
});

module.exports = router;
