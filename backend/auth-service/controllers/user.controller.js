const bcrypt = require('bcryptjs')
const errorHandler = require('../utils/error.js')
const User = require('../models/user.model.js')

// Test function for checking server status
const test = (req, res) => {
    res.json({ message: 'HELLO' })
}

// Function to update user information
const updateUser = async (req, res, next) => {
    // Checking if the requesting user is authorized to update the specified user
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to update this user'))
    }
    // Checking if the request includes a password update
    if (req.body.password) {
        if (req.body.password.length < 6) {
            return next(errorHandler(400, 'Password must be at least 6 charachters'))
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10)
    }
    // Checking if the request includes a username update
    if (req.body.userName) {
        if (req.body.userName.length < 7 || req.body.userName.length > 20) {
            return next(errorHandler(400, 'Username must be between 7 and 20 characters'))
        }
        if (req.body.userName.includes(' ')) {
            return next(errorHandler(400, 'Username cannot contains spaces'))
        }
        if (req.body.userName !== req.body.userName.toLowerCase()) {
            return next(errorHandler(400, 'Username must be lowercase'))
        }
        if (!req.body.userName.match(/^[a-zA-Z0-9]+$/)) {
            return next(errorHandler(400, 'Username can only contains letters and numbers'))
        }
    }
    try {
        // Updating the user information in the database
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
            $set: {
                userName: req.body.userName,
                email: req.body.email,
                profilePicture: req.body.profilePicture,
                password: req.body.password,
            },
        }, { new: true })
        const { password, ...rest } = updatedUser._doc
        res.status(200).json(rest)
    } catch (error) {
        next(error)
    }
}

// Function to delete a user
const deleteUser = async (req, res, next) => {
    // Checking if the requesting user is authorized to delete the specified user
    if (!req.user.isAdmin && req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to delete this user'))
    }
    try {
        // Deleting the user from the database
        await User.findByIdAndDelete(req.params.userId)
        res.status(200).json('User has been deleted')
    } catch (error) {
        next(error)
    }
}

// Function to sign out a user
const signOutUser = async (req, res, next) => {
    try {
        // Clearing the access token cookie
        res.clearCookie('access_token').status(200).json('User han been sign out')
    } catch (error) {
        next(error)
    }

}

// Function to get all users (accessible only to admins)
const getUsers = async (req, res, next) => {
    // Checking if the requesting user is an admin
    if (!req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to see all the users'))
    }
    try {
        // Extracting query parameters
        const startIndex = parseInt(req.query.startIndex) || 0
        const limit = parseInt(req.query.limit) || 9
        const sortDirection = req.query.sort === 'asc' ? 1 : -1
        const users = await User.find()
            .sort({ createdAt: sortDirection })
            .skip(startIndex)
            .limit(limit)
        const usersWithOutPassword = users.map((user) => {
            const { password, ...rest } = user._doc
            return rest
        })
        // Counting total users and users added in the last month
        const totalUsers = await User.countDocuments()
        const now = new Date()
        const oneMonthAgo = new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            now.getDate()
        )
        const lastMonthUsers = await User.countDocuments({
            createdAt: { $gte: oneMonthAgo },
        })
        res.status(200).json({
            users: usersWithOutPassword,
            totalUsers,
            lastMonthUsers,
        })
    } catch (error) {
        next(error)
    }
}

// Function to get a single user by ID
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return next(errorHandler(404, 'User not found'));
        }
        const { password, ...rest } = user._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};

module.exports = { test, updateUser, deleteUser, signOutUser, getUsers, getUser }

