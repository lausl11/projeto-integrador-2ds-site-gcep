const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

// Configuração do Handlebars
app.engine('handlebars', engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, '../views/layouts'),
  partialsDir: path.join(__dirname, '../views/partials')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views'));

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