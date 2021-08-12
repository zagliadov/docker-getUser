const db = require('../db/db.js');

exports.getCars = async (req, res, next) => {
    try {
        const {rows} = await db.query('SELECT * FROM models')
        console.log(rows)
        res.status(200).json(rows)
    } catch(error) {
        console.log(error.message)
    }
};