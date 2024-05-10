const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            // require: true
        },
        content: {
            type: String,
            required: true  // corrected from 'require' to 'required'
        },
        title: {
            type: String,
            unique: true,
            required: true  // Assuming you want to make title required as well
        },
        image: {
            type: String,
            default: 'https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png'
        },
        videos: [{  // Changed from 'video' to 'videos' and type to Array of Strings
            type: String,
            default: 'https://videopromotion.club/assets/images/default-video-thumbnail.jpg'
        }],
        pdfs: [{  // Changed from 'pdf' to 'pdfs' and type to Array of Strings
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
