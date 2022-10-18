const Sequelize = require('Sequelize')

require('dotenv').config();

// create connection to db
const Sequelize = process.env.JAWSDB_URL
 new Sequelize(process.env.JAWSDB_URL)
 new Sequelize(process.env.DB_NAME, process.env.DB_USER, Process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3301
 });

 module.exports = Sequelize;