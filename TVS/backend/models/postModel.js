// SQL užklausos

const connectDB = require('../config/db');

const getAllPosts = async () => {
  const db = await connectDB();
  const [rows] = await db.query('SELECT * FROM posts');
  await db.end();
  return rows;
};

const createPost = async (title, content) => {
  const db = await connectDB();
  await db.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content]);
  await db.end();
};

const updatePost = async (id, title, content) => {
  const db = await connectDB();
  await db.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id]);
  await db.end();
};

const deletePost = async (id) => {
  const db = await connectDB();
  await db.query('DELETE FROM posts WHERE id = ?', [id]);
  await db.end();
};

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
};
