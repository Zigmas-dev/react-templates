const multer = require('multer');
const path = require('path');
const { getAllPosts, createPost, updatePost, deletePost } = require('../models/postModel');

// Sukonfigūruojame multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Nuotraukos saugojimo vieta
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const getPosts = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (err) {
    console.error('Klaida gaunant straipsnius:', err);
    res.status(500).send('Įvyko klaida');
  }
};

const addPost = async (req, res) => {
  const { pavadinimas, aprasymas } = req.body;
  const nuotrauka = req.file ? req.file.filename : null;

  try {
    await createPost(pavadinimas, aprasymas, nuotrauka);
    res.status(201).send('Straipsnis pridėtas');
  } catch (err) {
    console.error('Klaida pridedant straipsnį:', err);
    res.status(500).send('Įvyko klaida');
  }
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const { pavadinimas, aprasymas } = req.body;
  const nuotrauka = req.file ? req.file.filename : null;

  try {
    await updatePost(id, pavadinimas, aprasymas, nuotrauka);
    res.send('Straipsnis atnaujintas');
  } catch (err) {
    console.error('Klaida atnaujinant straipsnį:', err);
    res.status(500).send('Įvyko klaida');
  }
};

const removePost = async (req, res) => {
  const { id } = req.params;
  try {
    await deletePost(id);
    res.send('Straipsnis ištrintas');
  } catch (err) {
    console.error('Klaida trinant straipsnį:', err);
    res.status(500).send('Įvyko klaida');
  }
};

module.exports = {
  getPosts,
  addPost: [upload.single('nuotrauka'), addPost],
  editPost: [upload.single('nuotrauka'), editPost],
  removePost,
};
