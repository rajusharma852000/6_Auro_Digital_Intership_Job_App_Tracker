const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { validateApplicationInput } = require('../middleware/validateInput');
const { createJobApplication, getUserApplications } = require('../controllers/applicationController');
const router = express.Router();

router.post('/', validateApplicationInput, protect, createJobApplication); // Create a new job application
router.get('/:userId', protect, getUserApplications); // Get job applications for a user

module.exports = router;
