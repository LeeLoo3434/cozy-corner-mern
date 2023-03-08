// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Event = require('./models/event');
const Profile = require('./models/profile');
const Friend = require('./models/friend');
const Rsvp = require('./models/rsvp');
const Comment = require('./models/comment')
// Local variables will come in handy for holding retrieved documents
let user, event, profile, friend, rsvp, comment
let users, events, profiles, friends, rsvps, comments