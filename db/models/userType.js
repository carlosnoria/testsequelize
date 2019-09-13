'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define('UserType', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {tableName: "p_user_type" , paranoid: true});
  UserType.associate = function(models) {
    UserType.hasMany(models.User);
  };
  return UserType;
};