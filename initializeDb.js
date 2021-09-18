const Sequelize = require('sequelize');
require('dotenv').config()

const HOST = process.env.DB_HOST == undefined ? process.env.RDS_HOSTNAME : process.env.DB_HOST;
const DB = process.env.DB_NAME == undefined ? process.env.RDS_DB_NAME : process.env.DB_NAME;
const USERNAME = process.env.DB_USERNAME == undefined ? process.env.RDS_USERNAME : process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD == undefined ? process.env.RDS_PASSWORD: process.env.DB_PASSWORD;

const sequelize = new Sequelize(DB, USERNAME, PASSWORD, {
    host: HOST,
    dialect:'mysql',
    ssl: 'Amazon RDS'
});

module.exports = sequelize


