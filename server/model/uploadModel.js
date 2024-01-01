const mongoose = require("mongoose");

const imageDetailsSchema = new mongoose.Schema({
  imageUrl: {
    type: String
  },
  publicId: {
    type: String
  }
});

const ImageGalleryDetails = mongoose.model("ImageGalleryImages", imageDetailsSchema);

module.exports = ImageGalleryDetails;
