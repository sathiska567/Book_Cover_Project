const express = require('express');
const changePasswordController = require('../controller/changePasswordController');

const router = express.Router();

// HANDLE CHANGE PASSWORD || POST
router.post('/change-password',changePasswordController)


module.exports = router;