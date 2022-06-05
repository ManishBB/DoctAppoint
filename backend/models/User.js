const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    mobilenumber:{
        type: Number,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required : true
    },
    gender:{
        type: String,
        required : true
    }
  });
  const User = mongoose.model('user', UserSchema);
  module.exports = User;