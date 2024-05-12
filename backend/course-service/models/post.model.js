const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
           
        },
        content: {
            type: String,
            required: true
        },
        title: {
            type: String,
            unique: true,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            default: 'https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png'
        },
        videos: [{
            type: String,
            default: 'https://videopromotion.club/assets/images/default-video-thumbnail.jpg'
        }],
        pdfs: [{
            type: String,
            default: 'https://videopromotion.club/assets/images/default-video-thumbnail.jpg'
        }],
        category: {
            type: String,
            default: 'uncategorized',
        },
        slug: {
            type: String,
            required: true,
            unique: true
        },

    }, { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
