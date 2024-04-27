const express = require('express')
const dotenv = require('dotenv')
const clientRouter = require('./routes/client.route.js')
const appointmrntRouter = require('./routes/appointments.route.js')
const authRouter = require('./routes/auth.route.js')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

dotenv.config()
mongoose.connect(process.env.MONGODB_CONNECTION).then(() => console.log('Database connected...')).catch((err) => {
    console.log(err);
})

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())


app.listen(5000, () => {
    console.log('Server is running on port 5000');
})

app.use('/api/client', clientRouter)
app.use('/api/appointment', appointmrntRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})