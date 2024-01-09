const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
   
   videoUrl:{
        type:String,
   }


})

const videoDetailsSchema = mongoose.model("videoGallery",videoSchema)