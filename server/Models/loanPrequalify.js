module.exports = (sequelize, DataTypes) => {
  const LoanApplication = sequelize.define('LoanApplication', {
    loanAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    monthlyIncome: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    loanPurpose: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loanYears: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maritalStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    numberOfDependents: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    houseInfo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return LoanApplication;
};
