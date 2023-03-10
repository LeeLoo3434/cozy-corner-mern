const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');

router.get('/index', eventsCtrl.index);
router.post('/create', eventsCtrl.create);
router.post('/update/:id', eventsCtrl.updateEvent);
router.delete('/delete/:id', eventsCtrl.delete);

module.exports = router;