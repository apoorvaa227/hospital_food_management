const mongoose = require('mongoose');

const deliveryPersonnelSchema = new mongoose.Schema({
  name: String,
  contactInfo: String,
  assignedMeals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodDietChart' }],
  deliveryStatus: String,
});

module.exports = mongoose.model('DeliveryPersonnel', deliveryPersonnelSchema);
