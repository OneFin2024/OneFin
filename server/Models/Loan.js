module.exports = (sequelize, DataTypes) => {
    const LoanApplication = sequelize.define('LoanApplication', {
      test: {
        type: DataTypes.STRING,
        allowNull: false,
      },
   
    });

    return LoanApplication;
  };
  