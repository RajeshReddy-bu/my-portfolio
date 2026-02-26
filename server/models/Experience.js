const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    date: { type: String, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    desc: { type: String, required: true },
    tags: [String],
    recent: { type: Boolean, default: false },
    icon: { type: String, default: '📜' }
}, { timestamps: true });

module.exports = mongoose.model('Experience', ExperienceSchema);
