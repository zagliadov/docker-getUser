const { Sequelize } = require('sequelize');
const sequelize = require('./sequelize');

const Country = sequelize.define('countries', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    country_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    country_population: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});


module.exports = Country;