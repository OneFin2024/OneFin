const { Sequelize } = require('sequelize');
const config = require('../config/config');

console.log("config", config)
// const sequelize = new Sequelize('OneFin', 'root', 'Yeesou.33', {
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect, // replace 'mysql' with your dialect if it's different
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.User = require('./user')(sequelize, Sequelize);
db.LoanPrequalify = require('./loanPrequalify')(sequelize,Sequelize)
db.ApplicantInformation = require('./LoanModes/applicantInformation.Models')(sequelize,Sequelize)
db.BusinessDetails = require('./LoanModes/businessDetails.Models')(sequelize,Sequelize)
db.BusinessFinancialInformation = require('./LoanModes/businessFinancialInformation.Models')(sequelize,Sequelize)
db.ContactInformation = require('./LoanModes/contactInformation.Models')(sequelize,Sequelize)
db.GeneralInfo = require('./LoanModes/generalInfo.Models')(sequelize,Sequelize)
db.LoanApplication = require('./LoanModes/loanApplication.Models')(sequelize,Sequelize)
db.RequestDetails = require('./LoanModes/requestDetails.Models')(sequelize,Sequelize)

db.LoanApplicationHasApplicantInformation = require('./LoanModes/loanApplicationHasApplicantInformation.Models')(sequelize,Sequelize)
db.BusinessFinancialInformationHasLoanApplication = require('./LoanModes/businessFinancialInformationHasLoanApplication.Models')(sequelize,Sequelize)


  

db.User.hasMany(db.LoanPrequalify, { foreignKey: 'userId' });
db.LoanPrequalify.belongsTo(db.User, { foreignKey: 'userId' });

db.User.hasMany(db.LoanApplication, { foreignKey: 'userId' });
db.LoanApplication.belongsTo(db.User, { foreignKey: 'userId' });


db.LoanApplication.hasMany(db.GeneralInfo);
db.GeneralInfo.belongsTo(db.LoanApplication);

db.LoanApplication.hasMany(db.ContactInformation);
db.ContactInformation.belongsTo(db.LoanApplication);

db.LoanApplication.hasMany(db.BusinessDetails);
db.BusinessDetails.belongsTo(db.LoanApplication);

db.LoanApplication.hasMany(db.RequestDetails);
db.RequestDetails.belongsTo(db.LoanApplication);

db.LoanApplication.belongsToMany(db.ApplicantInformation,{ through: db.LoanApplicationHasApplicantInformation  });
db.ApplicantInformation.belongsToMany(db.LoanApplication,{ through:db.LoanApplicationHasApplicantInformation  });

db.LoanApplication.belongsToMany(db.BusinessFinancialInformation,{ through:  db.BusinessFinancialInformationHasLoanApplication  });
db.BusinessFinancialInformation.belongsToMany(db.LoanApplication,{ through: db.BusinessFinancialInformationHasLoanApplication  });
















// db.User.hasMany(db.Loan, { foreignKey: 'userId' });
// db.Loan.belongsTo(db.User, { foreignKey: 'userId' });



module.exports = db;
