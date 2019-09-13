'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    namee: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {tableName: "group" , paranoid: true});
  Group.associate = function(models) {
    Group.hasMany(models.Totem);
    Group.belongsToMany(models.User, {through: 'a_user_group'});
  };
  return Group;
};