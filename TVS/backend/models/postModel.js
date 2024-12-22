const connectDB = require('../config/db');

const getAllPosts = async () => {
  const db = await connectDB();
  const [rows] = await db.query('SELECT * FROM posts ORDER BY sukurimo_data DESC');
  await db.end();
  return rows;
};

const createPost = async (pavadinimas, aprasymas, nuotrauka) => {
  const db = await connectDB();
  await db.query(
    'INSERT INTO posts (pavadinimas, aprasymas, nuotrauka) VALUES (?, ?, ?)',
    [pavadinimas, aprasymas, nuotrauka]
  );
  await db.end();
};

const updatePost = async (id, pavadinimas, aprasymas, nuotrauka) => {
  const db = await connectDB();
  await db.query(
    'UPDATE posts SET pavadinimas = ?, aprasymas = ?, nuotrauka = ? WHERE id = ?',
    [pavadinimas, aprasymas, nuotrauka, id]
  );
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
