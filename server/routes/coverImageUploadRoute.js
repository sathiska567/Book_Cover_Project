const express = require('express');
const { coverImageUploadController,getCoverImageUploadController } = require('../controller/coverImageUploadController');

const router = express.Router();

const expressFormidable = require('express-formidable');

// UPLOAD COVER IMAGE || POST
router.post("/cover-image-upload",expressFormidable({maxFieldsSize:5*1024*1024}),coverImageUploadController)


// GET UPLAOD COVER IMAGE || GET
router.get("/get-cover-image",getCoverImageUploadController)

module.exports = router;