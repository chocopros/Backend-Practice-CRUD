//todo con respecto a la conexion

const { Sequelize } = require('sequelize');

const db = new Sequelize ({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'jA27511*',
    database: 'movies_crud'
});

module.exports = { db };