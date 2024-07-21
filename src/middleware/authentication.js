const jwt = require('jsonwebtoken');
require('dotenv').config();
const httpStatus = require('http-status');
const {User} = require('../models/user.model');

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '').trim();
    if (!token) {
        return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Authentication required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded", decoded)

        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Invalid token' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(httpStatus.UNAUTHORIZED).json({ message: 'Authentication required' });
    }
};

module.exports = authenticate;
