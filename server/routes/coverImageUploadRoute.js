const express = require('express');
const { coverImageUploadRouter } = require('../controller/coverImageUploadController');

const router = express.Router();

const expressFormidable = require('express-formidable');

router.post("/cover-image-upload",expressFormidable({maxFieldsSize:5*1024*1024}),coverImageUploadRouter)


module.exports = router;