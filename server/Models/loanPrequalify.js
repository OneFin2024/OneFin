module.exports = (sequelize, DataTypes) => {
  const LoanPrequalify = sequelize.define('LoanPrequalify', {
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
    BusinessName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    StreetAdresse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ZipCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Industry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    InitiationYear: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CreditRating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CreditScore: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'LoanPrequalify',
    timestamps: false
  });

  return LoanPrequalify;
};
