const express = require('express');
const { registerController } = require('../controller/registerController');

const router = express.Router();

// Create Login Controller
router.post("/register",registerController)

module.exports = router;