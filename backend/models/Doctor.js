const mongoose = require('mongoose');
const { Schema } = mongoose;

const DoctorSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    education:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
  });
  const Doctor = mongoose.model('doctor', DoctorSchema);
  module.exports = Doctor;