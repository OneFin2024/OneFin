module.exports = (sequelize, DataTypes) => {
    const ApplicantInformation = sequelize.define('ApplicantInformation', {
      idApplicantInformation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      FullName: DataTypes.STRING,
      JobTitle: DataTypes.STRING,
      CellPhoneNumber: DataTypes.STRING,
      EmailAddress: DataTypes.STRING,
      SocialSecurityNumber: DataTypes.INTEGER,
      Birthdate: DataTypes.STRING,
      CreditScore: DataTypes.INTEGER,
      StreetAddress: DataTypes.STRING,
      Unit: DataTypes.STRING,
      City: DataTypes.STRING,
      State: DataTypes.STRING,
      ZipCode: DataTypes.INTEGER,
      OwnershipPercentage: DataTypes.INTEGER,
      YearlyIncome: DataTypes.INTEGER,
      TotalHouseholdAssets: DataTypes.INTEGER,
      TotalHouseholdLiabilities: DataTypes.INTEGER
    }, {
      tableName: 'ApplicantInformation',
      timestamps: false
    });
  
    return ApplicantInformation;
  };
  