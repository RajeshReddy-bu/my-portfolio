const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    greeting: { type: String, default: "Hi, I'm" },
    role: { type: String, required: true },
    bio: [String],
    location: { type: String },
    availability: { type: String },
    degree: { type: String },
    stats: {
        projects: { type: Number, default: 0 },
        hours: { type: Number, default: 0 },
        certs: { type: Number, default: 0 },
        experience: { type: String, default: '1+' }
    },
    socials: {
        github: String,
        linkedin: String,
        twitter: String,
        instagram: String,
        email: String,
        phone: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
