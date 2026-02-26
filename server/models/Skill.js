const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    level: { type: String },
    desc: { type: String },
    category: { type: String, enum: ['mern', 'frontend', 'tools'], default: 'frontend' },
    invert: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Skill', SkillSchema);
