const express = require('express');
const { create, getposts, deletepost } = require('../controllers/post.controller');

const router = express.Router();

router.post('/create', create)
router.get('/getposts', getposts)
router.delete('/deletepost/:postId', deletepost)



module.exports = router;