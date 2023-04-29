
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-zA-Z]{2,})$/.test(email),
      message: 'Invalid email',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 256,
    validate: {
      validator: (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,256}$/.test(password),
      message: 'Password must be atleast 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  },
  // stocks: [{
  //   symbol:{
  //     type: String,
  //     uppercase: true,
  //   },}]
  });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = model('User', userSchema);
