const express = require('express');
const router = express.Router();
const {
    registration,
    login, 
    protect,
} = require('../controllers/auth.js');



router.route('/registration')
    .post(registration);

router.route('/login')
    .post(login);

router.route('/private')
    .get(protect)

module.exports = router;