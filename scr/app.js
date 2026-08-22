const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();


// Arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, '../public')));

// Para receber dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota de teste (página inicial)
app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'GCEP - Página Inicial'
  });
});

app.get('/merenda', function (req, res){
  res.render('merenda')
});


module.exports = app;