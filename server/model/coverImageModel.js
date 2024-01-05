const mongoose = require('mongoose');

const coverImageSchema = new mongoose.Schema({
   coverimgUrl:{
        type:String
   }
})


const coverImageGallery = mongoose.model('coverImageGallery', coverImageSchema);

module.exports = coverImageGallery;