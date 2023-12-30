const express = require("express");
const { uploadImageController } = require("../controller/uploadController");

const router = express.Router();

// UPLOAD AN IMAGE || POST
router.post("/upload-image", uploadImageController);

module.exports = router;
