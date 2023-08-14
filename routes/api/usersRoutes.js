const router = require('express').Router(); // import the router from express

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/user-controller'); // import the functions from the user-controller.js file

router.route('/').get(getAllUsers).post(createUser); // GET all users and POST a new user

router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser); // GET a single user by ID, PUT update a user by ID, and DELETE a user by ID

module.exports = router; // export the router