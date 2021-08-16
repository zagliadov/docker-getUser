const express = require('express');
const router = express.Router();
const {
    getTotalNumbersOfCars,
    getTotalNumbersOfCarsByModels,
    getSalesAmountByModel,
    getSalesAmountByBrands,
    getMostProfitableModels,
    getModelOrder,
} = require('../controllers/cars');




router.route('/all_sales')
    .get(getTotalNumbersOfCars);

router.route('/sales_by_model')
    .get(getTotalNumbersOfCarsByModels);

router.route('/sales_amount_by_model')
    .get(getSalesAmountByModel);

router.route('/sales_amount_by_brands')
    .get(getSalesAmountByBrands);

router.route('/most_profitable_models')
    .get(getMostProfitableModels);

router.route('/model_order')
    .post(getModelOrder)




module.exports = router;