const express = require('express');
const { reviewController,getreviewController } = require('../controller/reviewController');

const router = express.Router();


// HANLDE REVIEW SECTION || POST
router.post("/review-section",reviewController)


// HANLDE GET REVIEW SECTION || GET
router.get("/get-review",getreviewController)


module.exports = router;