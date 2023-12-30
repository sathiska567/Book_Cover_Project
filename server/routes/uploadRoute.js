const express = require("express");
const { uploadImageController } = require("../controller/uploadController");

const router = express.Router();


// UPLOAD A IMAGES || POST
router.post("/upload-image",uploadImageController)



module.exports = router;