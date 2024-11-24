const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    skills: { type: [String], default: [] }, 
}, {
    timestamps: true,
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);
