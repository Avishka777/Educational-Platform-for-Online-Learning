const express = require('express')
const { test, updateUser, deleteUser, signOutUser, getUsers, getUser } = require('../controllers/user.controller')
const { verifyToken } = require('../utils/verifyUser')

const router = express.Router()

router.get('/', test)
router.get('/getusers', verifyToken, getUsers)
router.get('/:userId', getUser);
router.put('/update/:userId', verifyToken, updateUser)
router.delete('/delete/:userId', verifyToken, deleteUser)
router.post('/signout', signOutUser)

module.exports = router
