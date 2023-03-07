const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    bio: {type: String},
    pronouns: {type: String}
}, {timestamps: true});

module.exports = mongoose.model('Profile', profileSchema);
