const express = require('express');
const { registerNewUser, loginUser, updateUserSkills } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerNewUser); // Register a new user
router.post('/login', loginUser); // User login
router.put('/skills', protect, updateUserSkills); // Update user skills

module.exports = router;
