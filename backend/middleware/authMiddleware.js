const jwt = require('jsonwebtoken');
const UserProfile = require('../models/User'); // Changed User to UserProfile

const authenticateUser = async (req, res, next) => {
    let authToken;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            authToken = req.headers.authorization.split(' ')[1];

            // Verify token
            const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET);

            // Get user profile from the token
            req.userProfile = await UserProfile.findById(decodedToken.id).select('-password');

            next();
        } catch (error) {
            res.status(401);
            throw new Error('User not authorized');
        }
    }

    if (!authToken) {
        res.status(401);
        throw new Error('User not authorized, no token');
    }
};

module.exports = { authenticateUser };
