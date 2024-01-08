const ImageDetails = require("../model/uploadModel");
const cloudinary = require("cloudinary").v2;

// cloudinary configure
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API,
  api_secret: process.env.CLOUDINARY_SECRETE
});

// UPLOAD IMAGE CONTROLLER
// const uploadImageController = async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.files.image.path);

//     console.log(result.secure_url, result.public_id);

//     const newUploadModel = new ImageDetails({
//       imageUrl: result.secure_url,
//       publicId: result.public_id
//     });

//     await newUploadModel.save();

//     return res.status(200).send({
//       url: result.secure_url,
//       public_id: result.public_id,
//       success: true,
//       message: "Uploaded successfully",
//       result
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send({
//       success: false,
//       message: "Internal Server Error",
//       error: error.message
//     });
//   }
// };


const uploadImageController = async (req, res) => {
  try {
    const uploadedImages = [];

    // Assuming req.files is an array of files
      const result = await cloudinary.uploader.upload(req.files.image.path);
      console.log(result.secure_url, result.public_id);

      const newUploadModel = new ImageDetails({
        imageUrl: result.secure_url,
        publicId: result.public_id
      });

      await newUploadModel.save();

      uploadedImages.push({
        url: result.secure_url,
        public_id: result.public_id
      });

    return res.status(200).send({
      images: uploadedImages,
      success: true,
      message: "Uploaded successfully"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message
    });
  }
};


module.exports = { uploadImageController };
