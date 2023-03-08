const Event = require('../../models/event');

module.exports = {
  create,
};

async function create(req, res) {
  try {
    const eventData = req.body;
    const createdEvent = await Event.create(eventData);
    res.status(201).json(createdEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

