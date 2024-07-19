module.exports = (sequelize, DataTypes) => {
    const RequestDetails = sequelize.define('RequestDetails', {
      idRequestDetails: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      LoanAmountRequested: DataTypes.INTEGER,
      MinimumAmountNeeded: DataTypes.INTEGER,
      LoanType: DataTypes.STRING,
      purchaseequipment: DataTypes.BOOLEAN,
      VendorName: DataTypes.STRING,
      VendorPhoneNumber: DataTypes.INTEGER,
      ContactNameatVendor: DataTypes.STRING,
      LoanApplicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      tableName: 'RequestDetails',
      timestamps: false
    });
  
    return RequestDetails;
  };

  