const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

router.get('/', async (req, res) => {
  try {
    const location = req.query.location;
    const response = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=&location.address=${location}&location.within=10km&expand=venue`, {
      headers: {
        Authorization: `Bearer ${process.env.EVENTBRITE_API_KEY}`
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
