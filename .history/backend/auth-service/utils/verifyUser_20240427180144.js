const jwt = require('jsonwebtoken')
const errorHandler = require('../utils/error.js')

// Middleware function to verify JWT token
const verifyToken = (req, res, next) => {
    // Extract the JWT token from the access_token cookie in the request
    const token = req.cookies.access_token

    // If no token is found in the request
    if (!token) {
        // Return an error indicating unauthorized access (status code 401)
        return next(errorHandler(401, 'Unauthorized'))
    }

    // Verify the JWT token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        // If there's an error during token verification
        if (err) {
            // Return an error indicating unauthorized access (status code 401)
            return next(errorHandler(401, 'Unauthorized'))
        }

        // If token is successfully verified, attach the decoded user information to the request object
        req.user = user

        // Call the next middleware function
        next()
    })
}

module.exports = { verifyToken }
