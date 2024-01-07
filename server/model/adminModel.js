// models/UserModel.js

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },

  password: { 
    type: String, 
    required: true 
  },

  isAdmin : {
    type : Boolean,
    default : false
 },  
 
notification : {
  type : Array,
  default : []
},

seennotification : {
  type : Array,
  default : []
},

otp: { 
  type: Number, 
  required: false

},



});

const admin = mongoose.model('AdminDetails', adminSchema);

module.exports = admin;
