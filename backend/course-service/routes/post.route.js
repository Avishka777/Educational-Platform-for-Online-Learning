const express = require('express');
const { create, getposts, deletepost, updatepost } = require('../controllers/post.controller');

const router = express.Router();

router.post('/create', create)// Route for Create Course
router.get('/getposts', getposts)// Route for Get Course
router.delete('/deletepost/:postId', deletepost)// Route for Delete Course
router.put('/updatepost/:postId', updatepost)// Route for Update Course


module.exports = router;