const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const postRoute = require('../course-service/routes/post.route')

dotenv.config()
mongoose.connect(process.env.MONGODB_CONNECTION).then(() => console.log('Database connected...')).catch((err) => {
    console.log(err); // Connecting to MongoDB database using the connection string from environment variables
})

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())


app.listen(5002, () => {
    console.log('Server is running on port 5002');
})

// Using routes for Course
app.use('/api/post', postRoute)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})


module.exports = app;