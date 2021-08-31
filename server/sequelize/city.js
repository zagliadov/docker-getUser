const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const City = sequelize.define('city', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    city_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    city_population: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = City;