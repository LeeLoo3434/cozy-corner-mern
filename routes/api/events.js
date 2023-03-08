const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');

// POST /api/events/create - Create a new event
router.post('/', eventsCtrl.create);

module.exports = router;

