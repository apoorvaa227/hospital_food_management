const mongoose = require('mongoose');

const pantryStaffSchema = new mongoose.Schema({
  name: String,
  contactInfo: String,
  assignedTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodDietChart' }],
});

module.exports = mongoose.model('PantryStaff', pantryStaffSchema);
