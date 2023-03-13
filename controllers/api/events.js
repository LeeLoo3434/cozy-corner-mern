const Event = require('../../models/event')

module.exports = {
  index,
  create,
  update,
  delete: deleteEvent,
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

async function update(req, res) {
  const updEvent = await Event.findByIdAndUpdate(req.params.id, req.body);
  return res.json(updEvent)
}