require('dotenv').config();
const { Pool } = require('pg')
const pool = new Pool({
    user: process.env.DB_USER,
    database: 'carFactoryDB',
    host: 'carFactoryDB',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT

})

module.exports = {
    query: (text, params) => pool.query(text, params),
}