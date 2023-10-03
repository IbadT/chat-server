const pgDb = require('../config/db.js');
const Sequelize = require('sequelize');

const UserModel = pgDb.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        }
    }
);

module.exports = UserModel;