const express = require('express');
const { coverImageUploadController,getCoverImageUploadController,UpdateCoverImageUploadController } = require('../controller/coverImageUploadController');

const router = express.Router();

const expressFormidable = require('express-formidable');

// UPLOAD COVER IMAGE || POST
router.post("/cover-image-upload",expressFormidable({maxFieldsSize:5*1024*1024}),coverImageUploadController)


// UPDATE COVER IMAGE || POST
router.post("/update-cover-image-upload",expressFormidable({maxFieldsSize:5*1024*1024}),UpdateCoverImageUploadController)


// GET UPLAOD COVER IMAGE || GET
router.get("/get-cover-image",getCoverImageUploadController)

module.exports = router;