'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define('UserType', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {tableName: "user_type" , paranoid: true});
  UserType.associate = function(models) {
    // associations can be defined here
  };
  return UserType;
};