const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  diseases: [String],
  allergies: [String],
  roomNumber: String,
  bedNumber: String,
  floorNumber: String,
  age: Number,
  gender: String,
  contactInfo: String,
  emergencyContact: String,
  additionalDetails: String,
});

module.exports = mongoose.model('Patient', patientSchema);
