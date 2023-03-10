const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String},
    date: { type: Date,},
    location: { type: String},
    creator: { type: Schema.Types.ObjectId, ref: 'User'},
    attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

// eventSchema.methods.like = function(userId) {
//     if (!this.likes.includes(userId)) {
//         this.likes.push(userId);
//         return this.save();
//         } else {
//         return Promise.resolve(this);
// }
// };

module.exports = mongoose.model('Event', eventSchema);