const User = require('../models/user.model.js')
const bcrypt = require('bcryptjs')
const errorHandler = require('../utils/error.js')
const jwt = require('jsonwebtoken')

// Sign Up Function
const signup = async (req, res, next) => {
    const { userName, email, password } = req.body
    // Checking if any field is missing or empty
    if (!userName || !email || !password || userName === "" || email === "" || password === "") {
        next(errorHandler(400, 'All fields are required!'))
    }
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({ userName, email, password: hashedPassword })
    try {
        await newUser.save()
        res.json('Signup Successfull')
    } catch (error) {
        next(error)
    }
}

// Sign In Function
const signin = async (req, res, next) => {
    const { email, password } = req.body
    // Checking if email or password is missing or empty
    if (!email || !password || email === "" || password === "") {
        next(errorHandler(400, 'All fields are required!'))
    }
    try {
        const validUser = await User.findOne({ email })
        if (!validUser) {
            return next(errorHandler(404, 'Invalid User'))
        }
        const validPassword = bcrypt.compareSync(password, validUser.password)
        if (!validPassword) {
            return next(errorHandler(400, "Invalid Password"))
        }
        //create json web token
        const token = jwt.sign({ id: validUser._id, isAdmin: validUser.isAdmin }, process.env.JWT_SECRET)
        //separate password from validUser object
        const { password: pass, ...rest } = validUser._doc
        //create cookie and send it with token
        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(rest)
    } catch (error) {
        next(error)
    }
}

// Google  Function
const google = async (req, res, next) => {
    const { name, email, googlePhotoUrl } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            // Creating JSON Web Token
            const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);
            const { password, ...rest } = user._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        } else {
            // Generating random password
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
            const newUser = new User({
                userName: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl,
            });
            await newUser.save();
            // Creating JSON Web Token
            const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET);
            // Removing password from user object
            const { password, ...rest } = newUser._doc;
            // Creating cookie and sending it with token
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(rest);
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { signup, signin, google }