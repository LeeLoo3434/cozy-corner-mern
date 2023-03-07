const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {timestamps: true});

module.exports = mongoose.model('Friend', friendSchema);
