const express = require('express');
const { uploadVideoController } = require('../controller/videoUploadController');

const expressFormidable = require('express-formidable');

const router = express.Router();

// UPLOAD VIDEO || POST
router.post('/upload-video',expressFormidable({maxFieldsSize:5*1024*1024*1024}),uploadVideoController)

module.exports = router;