const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/index', eventsCtrl.index);
router.post('/create', eventsCtrl.create);
router.put('/:id', eventsCtrl.update);
router.delete('/delete/:id', eventsCtrl.delete)


module.exports = router;