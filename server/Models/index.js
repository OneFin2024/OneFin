const { Sequelize } = require('sequelize');
const config = require('../config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize('OneFin', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql', // replace 'mysql' with your dialect if it's different
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.User = require('./User')(sequelize, Sequelize);
db.LoanPrequalify = require('./loanPrequalify')(sequelize,Sequelize)
db.Loan = require('./Loan')(sequelize,Sequelize)




db.User.hasMany(db.LoanPrequalify, { foreignKey: 'userId' });
db.LoanPrequalify.belongsTo(db.User, { foreignKey: 'userId' });


db.User.hasMany(db.Loan, { foreignKey: 'userId' });
db.Loan.belongsTo(db.User, { foreignKey: 'userId' });



module.exports = db;
