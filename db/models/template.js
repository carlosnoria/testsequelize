'use strict';
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define('Template', {
    name: DataTypes.STRING
  }, {tableName: "template" , paranoid: true});
  Template.associate = function(models) {
    Template.hasMany(models.Asset);
  };
  return Template;
};