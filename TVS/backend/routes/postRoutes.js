const express = require('express');
const { getPosts, addPost, editPost, removePost } = require('../controllers/postController');

const router = express.Router();

router.get('/', getPosts);
router.post('/', addPost); // Naudojame multer
router.put('/:id', editPost);
router.delete('/:id', removePost);

module.exports = router;
