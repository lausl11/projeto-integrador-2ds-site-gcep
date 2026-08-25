const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/login.html'));
});

app.post('/login', (req, res) => {

    const email = req.body.email;
    const senha = req.body.senha;

    console.log(email);
    console.log(senha);

    res.send('Login recebido');

});

module.exports = app;