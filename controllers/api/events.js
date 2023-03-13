const Event = require('../../models/event')

module.exports = {
  index,
  create,
  update,
  delete: deleteEvent,
};

async function index(req, res) {
  let event = null
  if(req.user){
    event = await Event.find({user : req.user})
  }
  res.json(event)
}

async function create(req, res) {
  req.body.user = req.user._id
  console.log(req.body)
  const newEvent = await Event.create(req.body);
  return res.json(newEvent)
}


async function deleteEvent(req, res) {
  console.log(req.params.id)
  const deleteEvent = await Event.findByIdAndRemove(req.params.id)
  return res.json(deleteEvent)
}

async function update(req, res) {
  try {
    // check if required fields are present in the request body
    if (!req.body.title || !req.body.description || !req.body.date || !req.body.location) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // check if date is a valid date
    if (isNaN(Date.parse(req.body.date))) {
      return res.status(400).json({ error: 'Invalid date format. Please use yyyy-mm-dd.' });
    }

    // find event with the given id
    const event = await Event.findById(req.params.id);

    // handle case where event is not found
    if (!event) {
      return res.status(404).json({ error: 'Event not found.' });
    }

    // update event with request body
    event.title = req.body.title;
    event.description = req.body.description;
    event.date = req.body.date;
    event.location = req.body.location;

    // save updated event
    const updatedEvent = await event.save();

    // send updated event as response
    return res.json(updatedEvent);
  } catch (error) {
    // handle error
    console.error(error);
    return res.status(500).json({ error: 'Server error.' });
  }
}
