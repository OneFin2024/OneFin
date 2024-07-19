module.exports = (sequelize, DataTypes) => {
    const BusinessFinancialInformation = sequelize.define('BusinessFinancialInformation', {
      idBusinessFinancialInformation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      last3yearsRevenue: DataTypes.INTEGER,
      last2yearsRevenue: DataTypes.INTEGER,
      last1yearsRevenue: DataTypes.INTEGER,
      YTDRevenue: DataTypes.INTEGER,
      BankName: DataTypes.STRING,
      BankPhoneNumber: DataTypes.INTEGER,
      AccountType: DataTypes.STRING,
      AverageMonthlyDeposits: DataTypes.INTEGER,
      CurrentBalance: DataTypes.INTEGER,
      ContactName: DataTypes.STRING,
      DateOpened: DataTypes.DATE
    }, {
      tableName: 'BusinessFinancialInformation',
      timestamps: false
    });
  
    return BusinessFinancialInformation;
};
  