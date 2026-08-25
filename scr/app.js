const express = require('express');
const path = require('path');
const app = express();






app.post('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../pages/login.html'));
});

app.use(express.static(path.join(__dirname, '../public')));
module.exports = app;