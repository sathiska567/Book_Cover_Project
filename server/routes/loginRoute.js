const express = require('express');
const { route } = require('./registerRoute');
const { loginController } = require('../controller/loginController');

const router = express.Router();

// create Login Router
router.post('/login',loginController)


module.exports = router;