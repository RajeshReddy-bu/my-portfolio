// Vercel Serverless Function — handles all /api/* routes
const app = require('../server/index.js');

module.exports = (req, res) => {
    return app(req, res);
};
