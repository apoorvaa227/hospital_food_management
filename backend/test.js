const bcrypt = require('bcryptjs');

// Replace with hashed password from register route log
const hashedPassword = '$2a$10$...'; 

// Replace with plain password you used during registration
const plainPassword = 'yourPassword';

const isMatch = bcrypt.compareSync(plainPassword, hashedPassword);
console.log('Password match:', isMatch);
