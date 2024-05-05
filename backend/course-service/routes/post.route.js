const express = require('express');
const { create, getposts } = require('../controllers/post.controller');

const router = express.Router();

router.post('/create', create)
router.get('/getposts', getposts)
router.delete('/deletepost/:postId')



module.exports = router;