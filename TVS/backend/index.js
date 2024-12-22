require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API maršrutai
app.use('/api/posts', postRoutes);

// Startuojame serverį
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveris veikia http://localhost:${PORT}`);
});
