module.exports = (sequelize, DataTypes) => {
    const LoanApplication = sequelize.define('LoanApplication', {
      LegalBusinessName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // DoingBusinessAs: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },

      // GeneralNatureofBusiness: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },

      // StateTaxID: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },

      // FederalTaxID : {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },

      // ContactNumber: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },

      // StreetAddress:{
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },

      // City:{
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },

      // State:{
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },

      // ZipCode:{
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },




   
    });

    return LoanApplication;
  };
  