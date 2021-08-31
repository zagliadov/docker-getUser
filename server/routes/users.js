const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    removeUser,
    getThisUser,
    updateElement,
} = require('../controllers/users.js');



router.route('/all_users')
    .get(getAllUsers);

router.route('/remove_user/:id')
    .delete(removeUser);

router.route('/user/:id')
    .get(getThisUser);

router.route('/profile/update')
    .put(updateElement);

module.exports = router;