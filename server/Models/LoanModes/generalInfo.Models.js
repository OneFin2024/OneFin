module.exports = (sequelize, DataTypes) => {
    const GeneralInfo = sequelize.define('GeneralInfo', {
      idGeneralInfo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      LegalBusinessName: DataTypes.STRING,
      DoingBusinessAs: DataTypes.STRING,
      GeneralNatureofBusiness: DataTypes.STRING,
      StateTaxID: DataTypes.INTEGER,
      FederalTaxID: DataTypes.INTEGER,
      ContactNumber: DataTypes.INTEGER,
      LoanApplicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      tableName: 'GeneralInfo',
      timestamps: false
    });
  
    return GeneralInfo;
  };
  