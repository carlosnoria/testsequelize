'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {tableName: "users" , paranoid: true});
  User.associate = function(models) {
    User.belongsTo(models.Company);
    User.belongsTo(models.UserType);
    User.hasMany(models.Call);
    User.belongsToMany(models.Skill, {through: 'a_user_skill'});
    User.belongsToMany(models.Group, {through: 'a_user_group'});
  };
  return User;
};