module.exports = (sequelize, DataTypes) => {
    const BusinessDetails = sequelize.define('BusinessDetails', {
      idBusinessDetails: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      DunAndBradstreetNumber: DataTypes.INTEGER,
      NumberofEmployees: DataTypes.INTEGER,
      BusinessInceptionDate: DataTypes.DATE,
      LoanApplicationId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'BusinessDetails',
      timestamps: false
    });
  
    return BusinessDetails;
  };
  