require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Importuojame 'path' modulį
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Statinių failų katalogas (nuotraukoms arba kitiems failams)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API maršrutai
app.use('/api/posts', postRoutes);

// Pagrindinis maršrutas (testavimui)
app.get('/', (req, res) => {
  res.send('Serveris veikia!');
});

// Startuojame serverį
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveris veikia http://localhost:${PORT}`);
});
