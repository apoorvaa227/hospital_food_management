// routes/deliveryRoutes.js
const express = require('express');
const router = express.Router();
const { getDeliveries, markDeliveryComplete } = require('../controllers/deliveryController');
const authenticate = require('../middleware/authMiddleware');

// Get all deliveries
router.get('/deliveries', authenticate, getDeliveries);

// Mark delivery as complete
router.put('/deliveries/:id', authenticate, markDeliveryComplete);

module.exports = router;
