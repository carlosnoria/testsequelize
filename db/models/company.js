'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    commerce_contact_name: DataTypes.STRING,
    commerce_contact_email: DataTypes.STRING,
    commerce_contact_phone: DataTypes.STRING,
    tech_contact_name: DataTypes.STRING,
    tech_contact_email: DataTypes.STRING,
    tech_contact_phone: DataTypes.STRING
  }, {tableName: "company" , paranoid: true});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};