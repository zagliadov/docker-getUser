const jwt = require('jsonwebtoken');
const User = require('../models/User');
const db = require('../db/db.js');

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    };
    if (!token) {
        return next(res.status(401).json('Not authorized to access this route'))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await db.query(`SELECT * FROM users WHERE id = ${decoded.id}`);

        if (!user) return next(res.status(404).json('No user found with this id'))

        req.user = user;
        next();

    } catch (error) {
        return next(res.status(401).json('Not authorized to access this route'))
    }

}