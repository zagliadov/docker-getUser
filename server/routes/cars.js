const express = require('express');
const router = express.Router();
const { getCars } = require('../controllers/cars');




router.route('/')
    .get(getCars);

module.exports = router;