require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtGeneration = (user_id) => {
    const payload = {
        user: {
            id: user_id
        }
    }
    return jwt.sign(payload, process.env.JWT_SECRET, process.env.expiresIn);
}

module.exports = jwtGeneration;