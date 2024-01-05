const express = require("express");
const { createEventController } = require("../controller/eventController");

const router = express.Router();


// Create event details router
router.post("/create-event", createEventController)


module.exports = router;