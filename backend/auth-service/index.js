import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from '../api/routes/user.route.js'
import authRoute from '../api/routes/auth.route.js'
import cookieParser from 'cookie-parser'
import path from 'path'

dotenv.config()

mongoose.connect(process.env.MONOGO)
    .then(
        () => { console.log('Database is Connected'); }
    ).catch(err => {
        console.log(err);
    })

const __dirname = path.resolve()

const app = express()
app.use(express.json())
app.use(cookieParser())

app.listen(3000, () => {
    console.log('Server is runing on port 3000!!');
})

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal sever error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})