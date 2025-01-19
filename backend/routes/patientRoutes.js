// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi');
const Patient = require('../models/Patient');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Joi schema for input validation
const patientSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().min(0).required(),
  gender: Joi.string().valid('Male', 'Female', 'Other').required(),
  contact: Joi.string().pattern(/^[0-9]{10}$/).required(), // Assuming a 10-digit phone number
});

// Create a new patient
// Remove `authenticate` middleware for testing
// Create a new patient
// Remove `authenticate` middleware for testing
router.post('/', async (req, res) => {
    try {
      // Joi se validation kar
      const { error } = patientSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
  
      const newPatient = new Patient(req.body);
      await newPatient.save();
  
      res.status(201).json({ message: 'Patient created successfully', newPatient });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create patient' });
    }
  });
  
  
// Get all patients
router.get('/', authenticate, async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch patients' });
  }
});

// Get a specific patient by ID
router.get('/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid patient ID format' });
    }

    const patient = await Patient.findById(id);

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch patient' });
  }
});

// Update a specific patient by ID
router.put('/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid patient ID format' });
    }

    const { error } = patientSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const updatedPatient = await Patient.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true, // Ensures Mongoose validation is applied
    });

    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json({ message: 'Patient updated successfully', updatedPatient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update patient' });
  }
});

// Delete a specific patient by ID
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid patient ID format' });
    }

    const deletedPatient = await Patient.findByIdAndDelete(id);

    if (!deletedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete patient' });
  }
});

module.exports = router;
