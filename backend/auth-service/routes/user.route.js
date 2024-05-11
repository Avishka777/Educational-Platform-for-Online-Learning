const express = require('express')
const { test, updateUser, deleteUser, signOutUser, getUsers, getUser } = require('../controllers/user.controller')
const { verifyToken } = require('../utils/verifyUser')

const router = express.Router()

router.get('/', test)// Route for testing server status
router.get('/getusers', verifyToken, getUsers)// Route to get all users (accessible only with valid token)
router.get('/:userId', getUser);// Route to get a single user by ID
router.put('/update/:userId', verifyToken, updateUser)// Route to update user information (accessible only with valid token)
router.delete('/delete/:userId', verifyToken, deleteUser)// Route to delete a user (accessible only with valid token)
router.post('/signout', signOutUser)// Route to sign out a user (clears the access token cookie)

module.exports = router
