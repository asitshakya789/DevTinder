const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Ensures emails are stored in lowercase
      trim: true, // Removes spaces around the email
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 1, // Ensures age is positive
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'], // Restricts gender to specific values
    },
    branch: {
      type: String,
    },
  },
  { timestamps: true },
) // Adds `createdAt` and `updatedAt` timestamps automatically

module.exports = mongoose.model('User', userSchema)
