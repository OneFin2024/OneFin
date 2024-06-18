const { Sequelize } = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize('OneFin', 'root', 'Yeesou.33', {
  host: 'localhost',
  dialect: 'mysql', // replace 'mysql' with your dialect if it's different
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
