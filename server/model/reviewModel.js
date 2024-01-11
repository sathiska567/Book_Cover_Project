const mongoose = require('mongoose');

const reviewModel = new mongoose.Schema({
        userName:{
          type:String,
          required:["Please Enter Your Name",true]
        },
        review:{
            type:String,
            required:["Please Enter Your Review",true]
        }
})

const reviewCollection = new mongoose.model("reviewCollection",reviewModel)

module.exports = reviewCollection;