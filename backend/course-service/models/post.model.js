const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            // require: true
        },
        content: {
            type: String,
            require: true
        },
        title: {
            type: String,
            unique: true
        },
        decription: {
            type: String,
            require: true
        },
        image: {
            type: String,
            default: 'https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png'
        },
        video: {
            type: String,
            default: 'https://videopromotion.club/assets/images/default-video-thumbnail.jpg'
        },
        category: {
            type: String,
            default: 'uncategorized',
        },
        slug: {
            type: String,
            require: true,
            unique: true
        },

    }, { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)
module.exports =  Post