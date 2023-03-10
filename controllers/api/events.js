const Event = require('../../models/event')

module.exports = {
  index,
  create,
  delete: deleteEvent,
  updateEvent,
};

async function index(req, res) {
  let event = null
  if(req.user._id){
    event = await Event.find({user : req.user._id})
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
async function updateEvent(req, res) {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id, 
      req.body, // extract updated event data from the request body
      { new: true } // return the updated event instead of the original
    );
    return res.json(updatedEvent);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to update event' });
  }
}
