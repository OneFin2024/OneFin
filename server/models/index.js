const { Sequelize } = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(database=process.env.DB_NAME,username=process.env.DB_USER,password=process.env.MYSQL_ROOT_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql', // replace 'mysql' with your dialect if it's different
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.User = require('./user')(sequelize, Sequelize);
db.LoanPrequalify = require('./loanPrequalify')(sequelize,Sequelize)
db.Loan = require('./loan')(sequelize,Sequelize)


  

db.User.hasMany(db.LoanPrequalify, { foreignKey: 'userId' });
db.LoanPrequalify.belongsTo(db.User, { foreignKey: 'userId' });


db.User.hasMany(db.Loan, { foreignKey: 'userId' });
db.Loan.belongsTo(db.User, { foreignKey: 'userId' });



module.exports = db;
