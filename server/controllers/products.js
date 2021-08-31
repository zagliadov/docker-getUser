require('dotenv').config();
const crypto = require('crypto');
const sequelize = require('../sequelize/sequelize');
const fs = require('fs');
const Products = require('../sequelize/models/products')
const path = require('path');


exports.addProduct = async (req, res, next) => {
    const { brand, country, date } = req.body;
    const fileName1 = req.body.file1.fileName,
        fileName2 = req.body.file2.fileName,
        fileName3 = req.body.file3.fileName;
    const picture1 = req.body.file1.photo.split(',')[1],
        picture2 = req.body.file2.photo.split(',')[1],
        picture3 = req.body.file3.photo.split(',')[1];
    try {
        await sequelize.query(
            `INSERT INTO "Products" (brand, country, picture, "createdAt", "updatedAt")
            VALUES ('${brand}', '${country}', '{${fileName1}, ${fileName2}, ${fileName3}}', '${date}', '${date}')`
        );
        fs.writeFileSync(__dirname + `/upload/${fileName1}`, picture1, 'base64');
        fs.writeFileSync(__dirname + `/upload/${fileName2}`, picture2, 'base64');
        fs.writeFileSync(__dirname + `/upload/${fileName3}`, picture3, 'base64');
    } catch (error) {
        console.log(error.message)
    }
}

exports.getAllProducts = async (req, res, next) => {

    try {
        const products = await sequelize.query(
            `SELECT * FROM "Products"`
        );

        res.json(products)
    } catch (error) {
        console.log(error.message)
    }
}