// API logika

const { getAllPosts, createPost, updatePost, deletePost } = require('../models/postModel');

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
  const { title, content } = req.body;
  try {
    await createPost(title, content);
    res.status(201).send('Straipsnis pridėtas');
  } catch (err) {
    console.error('Klaida pridedant straipsnį:', err);
    res.status(500).send('Įvyko klaida');
  }
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    await updatePost(id, title, content);
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
  addPost,
  editPost,
  removePost,
};


