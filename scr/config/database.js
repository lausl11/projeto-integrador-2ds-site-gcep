const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gcep', 'root', 'Lau17112010*', 
    {host: 'localhost', dialect: 'mysql'});

module.exports = sequelize;