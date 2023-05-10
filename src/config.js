//? Habilita el acceso a mis varibles de entorno
require('dotenv').config();

const config = {
    port: process.env.PORT || 8000,
    nodeEnv: process.env.NODE_ENV || 'development',
    db:{
        port: process.env.DB_PORT || 5432,
        host: process.env.DB_HOST || '127.0.0.1',
        name: process.env.DB_NAME || 'movies_crud',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'jA27511*'
    }
};

module.exports = config;
