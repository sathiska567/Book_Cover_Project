const videoModule = require("../model/videoModel")
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRETE

});

const uploadVideoController = async(req,res)=>{
//    try {

//    console.log(req.files.video.path);

//    const result = await cloudinary.uploader.upload(req.files.video.path);
//    console.log("Upload successfull");
   

// //     console.log("hi");
        
//    } catch (error) {
//         console.log("cannot upload video");
//    }
}

module.exports = {uploadVideoController}