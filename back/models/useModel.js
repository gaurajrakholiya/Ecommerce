const mongoose = require('mongoose')
const Joi = require("joi");


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // to remove space
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      // default: 'user',
    },
  },
  { timestamps: true }
);

const User =  mongoose.model("users", userSchema);



module.exports.User = User
