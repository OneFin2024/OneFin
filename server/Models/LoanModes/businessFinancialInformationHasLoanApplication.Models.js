module.exports = (sequelize, DataTypes) => {
    const BusinessFinancialInformationHasLoanApplication = sequelize.define('BusinessFinancialInformationHasLoanApplication', {
      BusinessFinancialInformationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      LoanApplicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      tableName: 'BusinessFinancialInformation_has_LoanApplication',
      timestamps: false
    });
  
    return BusinessFinancialInformationHasLoanApplication;
  };
  