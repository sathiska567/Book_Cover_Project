const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getCurrentUserController } = require('../controller/currentUserController');

const router = express.Router();

// IDENTIFY CURRENT USER || POST
// GET CURRENT USER DETAILS
router.get('/getCurrentUser',authMiddleware,getCurrentUserController)


module.exports = router;