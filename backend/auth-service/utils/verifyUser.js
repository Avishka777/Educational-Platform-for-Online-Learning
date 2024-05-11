const jwt = require('jsonwebtoken')
const errorHandler = require('../utils/error.js')

// Middleware function to verify the access token provided in the request
const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    // Checking if the access token is missing
    if (!token) {
        return next(errorHandler(401, 'Unauthorized'))
    }
    // Verifying the access token using the JWT_SECRET and handling any errors
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return next(errorHandler(401, 'Unauthorized'))
        }
        req.user = user
        next()
    })
}

module.exports = { verifyToken }
