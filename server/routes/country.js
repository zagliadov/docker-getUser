const express = require('express');
const router = express.Router();
const {
    createCountry,
    getAllCountry,
    getBigPopulation,
    getSmallPopulation,
    getTotalPopulation,
    removeCountry,
    findCountry,
} = require('../controllers/country');


router.route('/create_country')
    .post(createCountry)

router.route('/all_country')
    .get(getAllCountry)

router.route('/big_population')
    .get(getBigPopulation)

router.route('/small_population')
    .get(getSmallPopulation)

router.route('/total_population')
    .get(getTotalPopulation)

router.route('/remove_country/:id')
    .delete(removeCountry)

router.route('/find_country')
    .post(findCountry)


module.exports = router;