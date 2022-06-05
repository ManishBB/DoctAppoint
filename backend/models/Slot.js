const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    userName:{
        type: String,
        required: true
    },
    userEmail:{
        type: String,
        required: true,
    },
    userNumber:{
        type: Number,
        required: true
    },
    userAge:{
        type: Number,
        required: true
    },
    appointmentDate:{
        type: Array,
        required: true
    },
  });
  const Appointment = mongoose.model('appointment', AppointmentSchema);
  module.exports = Appointment;