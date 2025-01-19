// controllers/dietChartController.js
const DietChart = require('../models/DietChart');

// Get all diet charts
const getDietCharts = async (req, res) => {
    try {
        const dietCharts = await DietChart.find();
        res.status(200).json(dietCharts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching diet charts' });
    }
};

// Create a new diet chart
const createDietChart = async (req, res) => {
    try {
        const newChart = new DietChart(req.body);
        await newChart.save();
        res.status(201).json(newChart);
    } catch (error) {
        res.status(400).json({ message: 'Error creating diet chart' });
    }
};

module.exports = { getDietCharts, createDietChart };
