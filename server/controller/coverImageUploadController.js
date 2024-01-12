const coverImageGalleryModel = require("../model/coverImageModel");
const eventModel = require("../model/eventModel");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRETE

});

const coverImageUploadController = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.files.image.path);

   console.log(result);

    // Create an instance of the coverImageGalleryModel
    const coverImageInstance = new coverImageGalleryModel({
      coverimgUrl: result.secure_url,
      publicId: result.public_id
    });

    // Save the cover image details to the database
    await coverImageInstance.save();

    console.log(result);

    return res.status(200).send({
      url: result.secure_url,
      public_id: result.public_id,
      success: true,
      message: "Cover Image Uploaded",
      result
    });

  } catch (error) {
    console.log(error);

    return res.status(400).send({
      success: false,
      message: "Cover Image Uploading has some error",
      error
    });
  }
};

// GET cover image
const getCoverImageUploadController = async(req,res)=>{
   try {

     const imgData = await coverImageGalleryModel.find({});
      res.status(200).send({
        success:true,
        message:"All cover images",
        imgData
      })
   } catch (error) {
      res.status(200).send({
      success:true,
      message:"All cover images",
       })
   }
}


const UpdateCoverImageUploadController = async(req,res)=>{

  try {
    
    const id = "65a0f4172dbf1ae3088c8610"
    const result = await cloudinary.uploader.upload(req.files.image.path);
    const updatedImg = await coverImageGalleryModel.findByIdAndUpdate(id,{coverimgUrl: result.secure_url,publicId: result.public_id},{new:true})

    console.log(updatedImg);
    res.status(200).send({
      success:true,
      message:"Cover Image Updated",
      updatedImg
    })

    
  } catch (error) {
    res.status(400).send({
      success:false,
      message:"Cover Image Uploading has some error",
    })
  }


}

module.exports = { coverImageUploadController,getCoverImageUploadController,UpdateCoverImageUploadController };
