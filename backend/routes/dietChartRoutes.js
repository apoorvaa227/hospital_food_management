// routes/dietChartRoutes.js
const express = require('express');
const router = express.Router();
const { getDietCharts, createDietChart } = require('../controllers/dietChartController');
const authenticate = require('../middleware/authMiddleware');

// Get all diet charts
router.get('/dietCharts', authenticate, getDietCharts);

// Create a new diet chart
router.post('/dietCharts', authenticate, createDietChart);

module.exports = router;
