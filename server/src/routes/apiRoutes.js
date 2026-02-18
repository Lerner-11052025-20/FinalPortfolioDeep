// API Routes - Definition of API endpoints
const express = require('express');
const { sendContactEmail } = require('../controllers/emailController');

const router = express.Router();

// Contact email route
router.post('/send-email', sendContactEmail);

module.exports = router;