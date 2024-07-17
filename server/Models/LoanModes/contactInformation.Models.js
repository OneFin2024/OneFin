module.exports = (sequelize, DataTypes) => {
    const ContactInformation = sequelize.define('ContactInformation', {
      idContactInformation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      StreetAddress: DataTypes.STRING,
      City: DataTypes.STRING,
      State: DataTypes.STRING,
      ZipCode: DataTypes.STRING,
      LoanApplicationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      tableName: 'ContactInformation',
      timestamps: false
    });
  
    return ContactInformation;
  };
  