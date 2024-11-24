const UserProfile = require('../models/UserProfile');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
const registerUserProfile = async (req, res) => {
    const { fullName, emailAddress, password, skillsList } = req.body;

    try {
        // Check if the user already exists
        const userExists = await UserProfile.findOne({ email: emailAddress });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user profile
        const userProfile = await UserProfile.create({
            fullName,
            email: emailAddress,
            password: hashedPassword,
            skills: skillsList || [], // Add the skills field here
        });

        if (userProfile) {
            res.status(201).json({
                _id: userProfile._id,
                fullName: userProfile.fullName,
                email: userProfile.email,
                skills: userProfile.skills,
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// User login
const loginUserProfile = async (req, res) => {
    try {
        const { emailAddress, password } = req.body;
        const userProfile = await UserProfile.findOne({ email: emailAddress });

        if (!userProfile || !(await bcrypt.compare(password, userProfile.password))) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: userProfile._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update skills
const updateUserSkillsList = async (req, res) => {
    const { skillsList } = req.body;

    try {
        const userProfile = await UserProfile.findById(req.user._id);
        if (!userProfile) {
            return res.status(404).json({ message: 'User not found' });
        }

        userProfile.skills = skillsList || []; // Update skills list
        await userProfile.save();

        res.json({ message: 'Skills updated successfully', skills: userProfile.skills });
    } catch (error) {
        res.status(500).json({ message: 'Error updating skills', error: error.message });
    }
};

module.exports = { registerUserProfile, loginUserProfile, updateUserSkillsList };
