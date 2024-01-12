const express = require('express');
const { deleteController,deleteReviewController } = require('../controller/deleteController');

const router = express.Router();

// HANLDE DELETE ROUTE || DELETE
router.post("/delete-request",deleteController)

// HANLDE DELETE ROUTE || DELETE
router.post("/delete-review",deleteReviewController)

module.exports = router;