'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    namee: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {tableName: "group" , paranoid: true});
  Group.associate = function(models) {
    // associations can be defined here
  };
  return Group;
};