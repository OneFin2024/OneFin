module.exports = (sequelize, DataTypes) => {
    const LoanApplication = sequelize.define('LoanApplication', {
      idLoanApplication: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      userName: DataTypes.STRING,
      userId: DataTypes.INTEGER
    }, {
      tableName: 'LoanApplication',
      timestamps: false
    });
  
    return LoanApplication;
  };
  