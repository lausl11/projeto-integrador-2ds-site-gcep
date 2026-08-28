const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();


// Rota de teste (página inicial)
app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'GCEP - Página Inicial'
  });
});

app.get('/login', function (req, res){
  res.render('login')
});

app.post('/login', function (req, res){
    nome: req.body.nome,
    senha: req.body.senha
});

app.get('/avisos', function (req, res){
  res.render('avisos')
});

app.post('/avisos', function (req, res){
  res.render('avisos')
});

app.get('/eventos', function (req, res){
  res.render('eventos')
});

app.post('/eventos', function (req, res){
  res.render('eventos')
});


app.get('/merenda', function (req, res){
  res.render('merenda')
});

app.post('/merenda', function (req, res){
  res.render('merenda')
});


app.post('/ouvidoria', function (req, res){
  res.render('ouvidoria')
});


module.exports = app;