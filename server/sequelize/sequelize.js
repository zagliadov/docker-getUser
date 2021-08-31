require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('carFactoryDB', 'admin', 'admin', {
    dialect: 'postgres',
    host: 'carFactoryDB',
    
});
 

module.exports = sequelize;
