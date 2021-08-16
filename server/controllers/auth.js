require('dotenv').config();
const db = require('../db/db.js');
const { createHmac } = require('crypto');
const jwt = require('jsonwebtoken');

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken()
    res.status(statusCode).json({
        success: true,
        token
    })
}


exports.registration = async (req, res, next) => {
    const { firstname, lastname, email, password, role, date } = req.body;
    try {
        const { rows } = await db.query(`
        INSERT INTO users (firstname, lastname, email, role, date, password)
            VALUES ('${firstname}', '${lastname}', '${email}', '${role}','${date}', '${password}');
        `);
        const token = await jwt.sign({
            email, password
        }, process.env.JWT_SECRET, {
            expiresIn: process.env.EXPIRES_IN
        });
        return res.json({
            token
        })

    } catch (error) {
        console.log(error.message)
        res.status(200).json({ message: 'User already exists!' })
    }
};

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
        const { rows } = await db.query(`
             SELECT * FROM users
                 WHERE email = '${decoded.email}' AND password = '${decoded.password}'
        `)
        res.json(rows)

    } catch (error) {
        return next(res.status(401).json('Not authorized to access this route'))
    }
}






exports.login = async (req, res, next) => {

    try {
        const { rows } = await db.query(`
             SELECT * FROM users
                 WHERE email = '${req.body.email}' AND password = '${req.body.password}'
        `)
        const { email, password } = rows[0];
        const token = await jwt.sign({
            email, password
        }, process.env.JWT_SECRET, {
            expiresIn: process.env.EXPIRES_IN
        });
        return res.json({
            token
        })
    } catch (error) {
        console.log(error.message)
        res.status(200).json({ message: 'Incorrect entry!' })
    }

}
