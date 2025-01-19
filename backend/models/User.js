const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures the email is unique
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],  // Define allowed roles
    default: 'user',  // Default role if not provided
  },
});

// Password hashing before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // Only hash if password is new or modified
  this.password = await bcrypt.hash(this.password, 10);  // Hash password
  next();
});

module.exports = mongoose.model('User', userSchema);
