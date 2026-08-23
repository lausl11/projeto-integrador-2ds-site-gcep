app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

App.post('/login', function(req, res){
    res.sendFile(path.join(__dirname, '../public/login.html'))
})

module.exports = app;