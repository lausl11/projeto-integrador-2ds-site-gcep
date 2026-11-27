
const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

// CONFIGURAÇÃO DA SESSÃO
app.use(session({
    secret: 'gcepers-chave-secreta',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true
    }
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));


function verificarLogin(req, res, next) {

    if (!req.session.usuario) {
        return res.redirect('/login');
    }

    next();
}


function verificarAdm(req, res, next) {

    if (!req.session.usuario) {
        return res.redirect('/login');
    }

    if (req.session.usuario.tipo !== 'adm') {
        return res.redirect('/');
    }

    next();
}

app.get('/api/sessao', (req, res) => {
    res.json({
        usuario: req.session.usuario || null
    });
});


// LOGIN
app.get('/login', (req, res) => {

    if (req.session.usuario) {
        return res.redirect('/');
    }

    res.sendFile(path.join(__dirname, '../pages/login.html'));
});


app.post('/login', (req, res, next) => {

    const email = String(req.body.email || '').trim().toLowerCase();

    let tipo;

    if (email.endsWith('@escola')) {
        tipo = 'escola';
    }

    else if (email.endsWith('@adm')) {
        tipo = 'adm';
    }

    else {
        return res.redirect('/login?erro=1');
    }

    // Cria uma nova sessão
    req.session.regenerate((erro) => {

        if (erro) {
            return next(erro);
        }

        req.session.usuario = {
            email: email,
            tipo: tipo
        };

        req.session.save((erro) => {

            if (erro) {
                return next(erro);
            }

            if (tipo === 'adm') {
                return res.redirect('/adm');
            }

            return res.redirect('/');

        });

    });

});


// SAIR / LOGOUT
app.get('/logout', (req, res) => {

    req.session.destroy((erro) => {

        if (erro) {
            return res.status(500).send('Erro ao encerrar sessão.');
        }

        res.clearCookie('connect.sid');
        res.redirect('/login');

    });

});


// INÍCIO
app.get('/', verificarLogin, (req, res) => {

    if (req.session.usuario.tipo === 'adm') {
        return res.redirect('/adm');
    }

    res.sendFile(path.join(__dirname, '../index.html'));

});


// PAINEL ADMINISTRATIVO
app.get('/adm', verificarAdm, (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/adm.html'));

});


// PERFIL
app.get('/perfil', verificarLogin, (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/perfil.html'));

});

app.put('/perfil/:id', verificarLogin, (req, res) => {

    const { id } = req.params;
    const { nome, email } = req.body;

    res.status(200).json({
        mensagem: 'Perfil atualizado com sucesso'
    });

});


// AVISOS
app.get('/avisos', verificarLogin, (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/avisos.html'));

});

app.post('/avisos', verificarAdm, (req, res) => {

    const { titulo, descricao } = req.body;

    res.json({
        mensagem: 'Aviso criado'
    });

});

app.put('/avisos/:id', verificarAdm, (req, res) => {

    const { id } = req.params;

    res.json({
        mensagem: `Aviso ${id} atualizado`
    });

});

app.delete('/avisos/:id', verificarAdm, (req, res) => {

    const { id } = req.params;

    res.json({
        mensagem: `Aviso ${id} removido`
    });

});


// EVENTOS
app.get('/eventos', verificarLogin, (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/eventos.html'));

});

app.post('/eventos', verificarAdm, (req, res) => {

    res.json({
        mensagem: 'Evento criado'
    });

});

app.put('/eventos/:id', verificarAdm, (req, res) => {

    const { id } = req.params;

    res.json({
        mensagem: `Evento ${id} atualizado`
    });

});

app.delete('/eventos/:id', verificarAdm, (req, res) => {

    const { id } = req.params;

    res.json({
        mensagem: `Evento ${id} removido`
    });

});


// MERENDA
app.get('/merenda', verificarLogin, (req, res) => {

    res.sendFile(path.join(__dirname, '../pages/merenda.html'));

});

app.post('/merenda', verificarAdm, (req, res) => {

    res.json({
        mensagem: 'Merenda cadastrada'
    });

});

app.put('/merenda/:id', verificarAdm, (req, res) => {

    const { id } = req.params;

    res.json({
        mensagem: `Merenda ${id} atualizada`
    });

});

app.delete('/merenda/:id', verificarAdm, (req, res) => {

    const { id } = req.params;

    res.json({
        mensagem: `Merenda ${id} removida`
    });

});


// OUVIDORIA
app.post('/ouvidoria', verificarLogin, (req, res) => {

    res.json({
        mensagem: 'Solicitação recebida'
    });

});


module.exports = app;
