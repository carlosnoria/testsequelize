'use strict';
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define('Template', {
    name: DataTypes.STRING
  }, {tableName: "template" , paranoid: true});
  Template.associate = function(models) {
    // associations can be defined here
  };
  return Template;
};