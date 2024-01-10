const express = require('express');
const { requestController,getRequestController } = require('../controller/requestController');

const router = express.Router();

// HANDLE POST REQUST || POST
router.post("/request",requestController)

// HANDLE GET REQUEST DATA || GET
router.get("/all-request",getRequestController)

module.exports = router;