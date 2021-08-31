const express = require('express');
const router = express.Router();
const {
    addProduct,
    getAllProducts,
} = require('../controllers/products.js');



router.route('/add_product')
    .post(addProduct);

router.route('/all_products')
    .get(getAllProducts);


module.exports = router;