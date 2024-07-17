module.exports = (sequelize, DataTypes) => {
    const LoanApplicationHasApplicantInformation = sequelize.define('LoanApplicationHasApplicantInformation', {
      LoanApplicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ApplicantInformationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      tableName: 'LoanApplication_has_ApplicantInformation',
      timestamps: false
    });
  
    return LoanApplicationHasApplicantInformation;
  };
  