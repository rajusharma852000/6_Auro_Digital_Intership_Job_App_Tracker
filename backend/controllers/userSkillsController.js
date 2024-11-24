const getUserSkillsList = async (req, res) => {
    try {
        // Example: Assume skills are stored in the user profile
        const userProfile = req.user; // User is retrieved via middleware
        if (!userProfile) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user's skills
        res.json(userProfile.skills || []); // Assume `skills` is an array in the user model
    } catch (error) {
        res.status(500).json({ message: 'Error fetching skills list', error: error.message });
    }
};

module.exports = { getUserSkillsList };
