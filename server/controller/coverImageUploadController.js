const coverImageGalleryModel = require("../model/coverImageModel")
const cloudinary = require("cloudinary").v2


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRETE
})


const coverImageUploadRouter = async(req,res)=>{

      try {
        const result = await cloudinary.uploader.upload(req.files.image.path)
        const res = await coverImageGalleryModel({coverimgUrl : result.secure_url})
        res.save();

        console.log(result);
        
        res.status(200).send({
          success:true,
          message:"Cover Image Uploaded",
          result
        })

      } catch (error) {
        res.status(400).send({
          success:false,
          message:"Cover Image Uploading have some error",
          error
        })
      }
              
                
        
}


module.exports = {coverImageUploadRouter}