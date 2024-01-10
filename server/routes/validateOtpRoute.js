const express = require('express');
const { valideOtpController } = require('../controller/validateOtpController');

const router = express.Router();

// HANDLE VALIDEOTP SECTION
router.post("/valide-otp",valideOtpController)

module.exports = router;