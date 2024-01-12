const express = require("express");
const { uploadImageController,getUploadImageController } = require("../controller/uploadController");

const router = express.Router();
const expressFormidable = require("express-formidable")

// UPLOAD AN IMAGE || POST
router.post("/upload-image-gallery",expressFormidable({maxFieldsSize:5*1024*1024}), uploadImageController);


// GET UPLOADED IMAGES || GET
router.get("/get-images", getUploadImageController);

module.exports = router;
