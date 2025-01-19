const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// const bcrypt = require('bcryptjs');
// const User = require('./models/User'); // Replace with the correct path to your User model


router.post('/register', async (req, res) => {
    const { email, password, role } = req.body;
  
    try {
      // Step 1: Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      console.log('Plain password during registration:', password);
      console.log('Hashed password during registration:', hashedPassword);
  
      // Step 2: Save user in the database
      const newUser = new User({
        email,
        password: hashedPassword,
        role,
      });
  
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Registration Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

// Login Route

router.post('/login', async (req, res) => {
    const { email, password } = req.body; // User ke input se email aur password lo
  
    try {
      // Step 1: Database se user ko email ke basis pe fetch karo
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      console.log('Fetched user from DB:', user);
  
      // Step 2: Compare provided password with hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      console.log('Provided password:', password);
      console.log('Stored hashed password:', user.password);
      console.log('Password match result:', isMatch);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Step 3: Successful login response
      res.status(200).json({
        message: 'Login successful',
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
    console.log('Stored Hashed Password during Registration:', hashedPassword);
console.log('Stored Hashed Password during Login:', user.password);

  });
module.exports = router;
