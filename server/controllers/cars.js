const numbersOfCarsByModels = 'SELECT model_name, COUNT(*) AS ModelCount FROM orders GROUP BY model_name',
    getTotalNumbersOfCars = 'SELECT COUNT(id) FROM orders',
    salesAmountByModel = 'SELECT model_name, COUNT(*) AS modelCount, SUM(retail_price) FROM orders GROUP BY(model_name, retail_price)';
const db = require('../db/db.js');

//1. Общее количество автомобилей которые продал завод
exports.getTotalNumbersOfCars = async (req, res, next) => {
    try {
        const { rows } = await db.query(getTotalNumbersOfCars)
        res.status(200).json(rows)
    } catch (error) {
        console.log(error.message)
    }
};

//2. Количество автомобилей которые продал завод по моделям
exports.getTotalNumbersOfCarsByModels = async (req, res, next) => {
    try {
        const { rows } = await db.query(numbersOfCarsByModels);
        res.status(200).json(rows)
    } catch (error) {
        console.log(error.message)
    }
}
//4. Кличество продаж автомобилей которые продал завод по моделям
exports.getSalesAmountByModel = async (req, res, next) => {
    try {
        const { rows } = await db.query(salesAmountByModel);
        res.status(200).json(rows)
    } catch (error) {
        console.log(error.message)
    }
}
//5. Количество продаж автомобилей которые продал завод по маркам(брендам)
exports.getSalesAmountByBrands = async (req, res, next) => {
    try {
        const { rows } = await db.query('SELECT brand_name, sum(retail_price) FROM orders GROUP BY GROUPING SETS (brand_name)');
        res.status(200).json(rows)
    } catch (error) {
        console.log(error.message)
    }
}
//6. Самые выгодные модели автомобилей (по разнице себестоимость - цена при продаже)
exports.getMostProfitableModels = async (req, res, next) => {
    try {
        const { rows } = await db.query(`SELECT model_name,
         (retail_price - build_price) AS difference FROM "orders" o JOIN "models" m on o.model_id = m.model_id GROUP BY retail_price, build_price, model_name
                                        ORDER BY difference ASC`);
        res.status(200).json(rows)
    } catch (error) {
        console.log(error.message)
    }
}

//7.
exports.getModelOrder = async (req, res, next) => {
    let model = req.body.car;
    try {
        const { rows } = await db.query(`SELECT * FROM orders WHERE model_name = '${model}'`);
        if(rows.length === 0) res.json({message: 'There is no such order'});
        res.status(200).json({order: rows})
    } catch (error) {
        console.log(error.message)
    }
}