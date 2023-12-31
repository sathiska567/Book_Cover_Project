const uploadModel = require("../model/uploadModel");
const cloudinary = require("cloudinary").v2

// cloudinary configure
cloudinary.config({
  cloud_name : process.env.CLOUDINARY_NAME,
  api_key : process.env.CLOUDINARY_API,
  api_secret : process.env.CLOUDINARY_SECRETE

})

// UPLOAD IMAGE CONTROLLER
const uploadImageController = async (req, res) => {
  try {

    console.log("image details",req.files);
    const result = await cloudinary.uploader.upload(req.files.image.path)
    console.log("uplaod image",result);

    res.status(200).send({
      url : result.secure_url,
      public_id : result.public_id
    })
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadImageController };
