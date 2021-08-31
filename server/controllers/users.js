require('dotenv').config();
const db = require('../db/db.js');


exports.getAllUsers = async (req, res, next) => {
    try {
        const { rows } = await db.query(`
            SELECT * FROM users
                WHERE role = 'user'
        `);
        res.json(rows)

    } catch (error) {
        console.log(error.message)
    }
};

exports.removeUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        await db.query(`
            DELETE FROM users
            WHERE id = ${id}
        `);
        const { rows } = await db.query(`
            SELECT * FROM users
                WHERE role = 'user'
        `);
        res.json(rows)


    } catch (error) {
        console.log(error)
    }
}
exports.getThisUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        const { rows } = await db.query(`
            SELECT * FROM users
                WHERE id = ${id}
        `);
        res.json(rows)
    } catch (error) {
        console.log(error.message);
    }
}

exports.updateElement = async (req, res, next) => {
    const id = req.body.data.id,
        newValue = req.body.data.text,
        fieldName = req.body.data.name.toLowerCase();
    try {
        await db.query(`
            UPDATE users SET ${fieldName} = '${newValue}' WHERE id = ${id}
        `);

        const { rows } = await db.query(`
            SELECT * FROM users
            WHERE id = ${id}
        `);
        res.json(...rows);

    } catch (error) {
        console.log(error.message);
    }


}