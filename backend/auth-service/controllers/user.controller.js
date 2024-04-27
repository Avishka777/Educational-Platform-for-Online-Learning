import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import User from '../models/user.model.js'

export const test = (req, res) => {
    res.json({ message: 'HELLO' })
}

export const updateUser = async (req, res, next) => {

    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to update this user'))
    }

    if (req.body.password) {
        if (req.body.password.length < 6) {
            return next(errorHandler(400, 'Password must be at least 6 charachters'))
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10)

    }

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

export const deleteUser = async (req, res, next) => {
    if (!req.user.isAdmin && req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to delete this user'))
    }

    try {
        await User.findByIdAndDelete(req.params.userId)
        res.status(200).json('User has been deleted')
    } catch (error) {
        next(error)
    }
}

export const signOutUser = async (req, res, next) => {

    try {
        res.clearCookie('access_token').status(200).json('User han been sign out')
    } catch (error) {
        next(error)
    }

}

export const getUsers = async (req, res, next) => {

    if (!req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to see all the users'))
    }

    try {

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

export const getUser = async (req, res, next) => {
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

