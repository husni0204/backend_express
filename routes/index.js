//import express
const express = require('express');

//import express router
const router = express.Router();

//import middleware upload
const upload = require('../middlewares/upload');

//import validators
const { validatePost } = require('../utils/validators/post');

//import post controller
const postController = require('../controllers/PostController');

//define route for posts
router.get('/posts', postController.findPosts);

//define route for create post
router.post('/posts', upload.single('image'), validatePost, postController.createPost);

//define route for posts by ID
router.get('/posts/:id', postController.findPostById);

//define route for post update
router.put('/posts/:id', upload.single('image'), validatePost, postController.updatePost);

//define route for post delete
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
