const mongoose = require('mongoose');
const { Schema } = mongoose;

const AvailabilitySchema = new Schema({
    dateAvailable:{
        type: Array,
    },
  });
  const Availability = mongoose.model('availability', AvailabilitySchema);
  module.exports = Availability;