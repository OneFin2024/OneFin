// require('dotenv').config({ path: '../.env' });
require('dotenv').config({ path: '../.env' });
console.log("current environment", process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME, process.env.DB_HOST);
const config = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
};

module.exports = config;
