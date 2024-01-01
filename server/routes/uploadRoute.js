const express = require("express");
const { uploadImageController } = require("../controller/uploadController");

const router = express.Router();
const expressFormidable = require("express-formidable")

// UPLOAD AN IMAGE || POST
router.post("/upload-image-gallery",expressFormidable({maxFieldsSize:5*1024*1024}), uploadImageController);

module.exports = router;
