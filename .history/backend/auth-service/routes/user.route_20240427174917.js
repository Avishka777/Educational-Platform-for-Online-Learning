const express = require('express')

import { test, updateUser, deleteUser, signOutUser, getUsers, getUser } from '../controllers/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.get('/', test)
router.get('/getusers', verifyToken, getUsers)
router.get('/:userId', getUser);
router.put('/update/:userId', verifyToken, updateUser)
router.delete('/delete/:userId', verifyToken, deleteUser)
router.post('/signout', signOutUser)

export default router
