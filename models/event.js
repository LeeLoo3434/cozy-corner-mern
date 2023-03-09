const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    attendees: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

eventSchema.methods.like = function(userId) {
    if (!this.likes.includes(userId)) {
        this.likes.push(userId);
        return this.save();
        } else {
        return Promise.resolve(this);
}
};
