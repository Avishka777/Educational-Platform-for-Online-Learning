const express = require('express');
const { create, getposts, deletepost, updatepost } = require('../controllers/post.controller');

const router = express.Router();

router.post('/create', create)
router.get('/getposts', getposts)
router.delete('/deletepost/:postId', deletepost)
router.put('/updatepost/:postId', updatepost)


module.exports = router;