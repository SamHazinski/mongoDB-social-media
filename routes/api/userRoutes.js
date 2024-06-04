const router = require('express').Router();
const {
    createUser,
    getUsers,
    getUser,
} = require('../../controllers/userController');



// /api/users post
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getUser);

module.exports = router;