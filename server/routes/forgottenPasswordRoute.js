const express = require('express');
const forgottenPasswordController = require('../controller/ForgottenPasswordController');

const router = express.Router();

// send OTP number || POST
router.post('/sendOTP',forgottenPasswordController)



module.exports = router;