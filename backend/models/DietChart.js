const mongoose = require('mongoose');

const foodDietChartSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  morningMeals: [String],
  eveningMeals: [String],
  nightMeals: [String],
  instructions: String,
  ingredients: [String],
});

module.exports = mongoose.model('FoodDietChart', foodDietChartSchema);
