// controllers/deliveryController.js
const Delivery = require('../models/Delivery');

// Get all deliveries
const getDeliveries = async (req, res) => {
    try {
        const deliveries = await Delivery.find();
        res.status(200).json(deliveries);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching deliveries' });
    }
};

// Mark delivery as complete
const markDeliveryComplete = async (req, res) => {
    try {
        const delivery = await Delivery.findById(req.params.id);
        if (!delivery) {
            return res.status(404).json({ message: 'Delivery not found' });
        }
        delivery.status = 'Complete';
        await delivery.save();
        res.status(200).json(delivery);
    } catch (error) {
        res.status(400).json({ message: 'Error marking delivery as complete' });
    }
};

module.exports = { getDeliveries, markDeliveryComplete };
