const Sequelize = require('sequelize');

const pgDb = new Sequelize(
    'chat_server',
    'postgres',
    'admin',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

module.exports = pgDb;