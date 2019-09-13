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
    Company.belongsTo(models.Country);
    Company.belongsTo(models.State);
    Company.belongsTo(models.City);
    Company.hasMany(models.ZoomAccount);
    Company.hasMany(models.Template);
    Company.hasMany(models.Skill);
    Company.hasMany(models.User);
  };
  return Company;
};