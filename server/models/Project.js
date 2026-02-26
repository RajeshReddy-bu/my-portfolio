const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    tech: [String],
    category: { type: String, enum: ['all', 'fullstack', 'frontend', 'backend'], default: 'all' },
    liveUrl: { type: String },
    sourceCode: { type: String },
    featured: { type: Boolean, default: false },
    date: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
