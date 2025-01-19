// controllers/patientController.js
const Patient = require('../models/Patient');

// Get all patients
const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching patients' });
    }
};

// Create a new patient
const createPatient = async (req, res) => {
    try {
        const newPatient = new Patient(req.body);
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(400).json({ message: 'Error creating patient' });
    }
};

module.exports = { getPatients, createPatient };
