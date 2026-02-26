// Vercel Serverless Function entry point
// Wraps the Express app as a serverless handler
const app = require('../server/index.js');
module.exports = app;
