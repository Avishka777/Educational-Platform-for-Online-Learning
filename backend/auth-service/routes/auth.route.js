const express = require('express')
const { signup, signin, google } = require('../controllers/auth.controller')

const router = express.Router()

router.post('/signup', signup)// Route to handle user sign up
router.post('/signin', signin)// Route to handle user sign in
router.post('/google', google)// Route to handle Google sign in

module.exports = router
