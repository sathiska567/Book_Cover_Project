const express = require('express');
const { coverImageUploadController } = require('../controller/coverImageUploadController');

const router = express.Router();

const expressFormidable = require('express-formidable');

router.post("/cover-image-upload",expressFormidable({maxFieldsSize:5*1024*1024}),coverImageUploadController)


module.exports = router;