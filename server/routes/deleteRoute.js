const express = require('express');
const { deleteController } = require('../controller/deleteController');

const router = express.Router();

// HANLDE DELETE ROUTE || DELETE
router.post("/delete-request",deleteController)

module.exports = router;