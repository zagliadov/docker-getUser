require('dotenv').config();
const sequelize = require('../sequelize/sequelize');
const { Op } = require("sequelize");

 const Country = require('../sequelize/country');
 //const Country = require('../sequelize/models/country')

const City = require('../sequelize/city');

 Country.hasMany(City);




exports.createCountry = async (req, res, next) => {
    const name = req.body.data.country_name;
    const population = +req.body.data.country_population;
    try {
        await Country.create({
            country_name: name,
            country_population: population,
        })
        const country = await Country.findAll({ raw: true })
        res.json(country)
    } catch (error) {
        console.log(error.message)
    }
};


exports.getAllCountry = async (req, res, next) => {

    try {
        const country = await Country.findAll({ raw: true })

        res.json(country)
    } catch (error) {
        console.log(error.message)
    }
}

exports.getBigPopulation = async (req, res, next) => {

    try {
        const country = await sequelize.query(
            `SELECT * FROM countries
            ORDER BY country_population DESC`
        )

        res.json(country[0])
    } catch (error) {
        console.log(error.message)
    }
}

exports.getSmallPopulation = async (req, res, next) => {

    try {
        const country = await sequelize.query(
            `SELECT * FROM countries
            ORDER BY country_population ASC`
        )
        res.json(country[0])
    } catch (error) {
        console.log(error.message)
    }
}

exports.getTotalPopulation = async (req, res, next) => {

    try {
        // const country = await sequelize.query(
        //     `SELECT SUM(country_population) AS count
        //     FROM countries`
        // )
        // res.json(country[0])
        const total = await Country.findAll({
            attributes: [
                [sequelize.fn('SUM', sequelize.col('country_population')), 'count']
            ]
        })
        res.json(total)
    } catch (error) {
        console.log(error.message)
    }
}

exports.removeCountry = async (req, res, next) => {
    const itemId = req.params.id
    try {
        await Country.destroy({
            where: {
                id: {
                    [Op.eq]: itemId
                }
            }
        });
        const country = await Country.findAll()
        res.json(country)

        // const a = await Country.findAll({
        //     where: {
        //         'country_name': {
        //            [Op.substring]: 'R' 
        //         }

        //     }
        // })

    } catch (error) {
        console.log(error.message)
    }
}

exports.findCountry = async (req, res, next) => {
    let name = req.body.data.split('');
    name.splice(0, 1, name[0].toUpperCase())
    let country = name.join('')
    try {

        // const a = await Country.findAll({
        //     where: {
        //         'country_name': {
        //             [Op.substring]: country
        //         }
        //     }
        // })
        
        const count = await sequelize.query(
            `SELECT SUM(country_population) as count FROM countries
                WHERE country_name LIKE '%${country}%'`
        )
        const countrys = await sequelize.query(
            `SELECT * FROM countries
                WHERE country_name LIKE '%${country}%'`
        )

            res.json({count, countrys})
    } catch (error) {
        console.log(error.message)
    }
}



