const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    event: {type: Schema.Types.ObjectId, ref: 'Event', required: true},
    comment: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);
