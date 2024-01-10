const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  nameOfOrganization:{
        type:String,
        required:true
  },
  nameOfTheRequest:{
        type:String,
        required:true
  },
  requestDescription:{
      type:String,
      required:true
  }

})

const Request = mongoose.model("RequestData",requestSchema);
module.exports = Request;