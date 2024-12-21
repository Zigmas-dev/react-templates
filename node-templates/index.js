const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express;

//Nustatome ejs kaip šablonų valdiklį:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Static failų katalogas (css, js, vaizdai)
app.use(express.static(path.join(__dirname, 'public')));

//Pagrindinis puslapis
app.get('/', (req, res) => {
  res.render('index', { title: 'Pagrindinis', message: 'Sveiki atvykę' });
});

// Kitas puslapis
app.get('/about', (req, res) => {
  res.render('about', { title: 'Apie mus', description: 'Šis puslapis skirtas parodyti mus' });
});

// Paleidžiamas serveris
app.listen(PORT, () => {
    console.log(`Serveris paleistas: http://localhost:${PORT}`);
});