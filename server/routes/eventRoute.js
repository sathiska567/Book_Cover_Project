const express = require("express");
const { createEventController, getCreateEventController } = require("../controller/eventController");

const router = express.Router();


// Create event details router
router.post("/create-event", createEventController)


// GET EVENT DETAILS || GET
router.get("/get-create-event",getCreateEventController)


module.exports = router;