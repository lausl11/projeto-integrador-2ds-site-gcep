const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/login', (req, res) => {
res.sendFile(path.join(__dirname, '../pages/login.html'));
});

app.post('/login', async (req, res) => {


const { email, senha } = req.body;

console.log(email);
console.log(senha);

if (!email.endsWith('@escola')) {
    return res.status(403).send('Acesso negado');
}

res.redirect('/');


});

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, '../pages/index.html'));
});

app.get('/perfil', function(req, res){
res.sendFile(path.join(__dirname, '../pages/perfil.html'));
});

app.put('/perfil/:id', async (req, res) => {


const { id } = req.params;
const { nome, email } = req.body;

res.status(200).json({
    mensagem: 'Perfil atualizado com sucesso'
});


});

app.get('/avisos', function(req, res){
res.sendFile(path.join(__dirname, '../pages/avisos.html'));
});

app.post('/avisos', function(req, res){


const { titulo, descricao } = req.body;

res.json({
    mensagem: 'Aviso criado'
});


});

app.put('/avisos/:id', function(req, res){


const {id} = req.params;

res.json({
    mensagem: `Aviso ${id} atualizado`
});


});

app.delete('/avisos/:id', function(req, res){


const { id } = req.params;

res.json({
    mensagem: `Aviso ${id} removido`
});


});

app.get('/eventos', function(req, res){
res.sendFile(path.join(__dirname, '../pages/eventos.html'));
});

app.post('/eventos', function(req, res){


res.json({
    mensagem: 'Evento criado'
});


});

app.put('/eventos/:id', function(req, res){


const { id } = req.params;

res.json({
    mensagem: `Evento ${id} atualizado`
});


});

app.delete('/eventos/:id', function(req, res){


const { id } = req.params;

res.json({
    mensagem: `Evento ${id} removido`
});


});

app.get('/merenda', function(req, res){
res.sendFile(path.join(__dirname, '../pages/merenda.html'));
});

app.post('/merenda', function(req, res){


res.json({
    mensagem: 'Merenda cadastrada'
});


});

app.put('/merenda/:id', function(req, res){


const { id } = req.params;

res.json({
    mensagem: `Merenda ${id} atualizada`
});


});

app.delete('/merenda/:id', function(req, res){


const { id } = req.params;

res.json({
    mensagem: `Merenda ${id} removida`
});


});


module.exports = app;
