'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING
  }, {tableName: "skill" , paranoid: true});
  Skill.associate = function(models) {
    Skill.belongsTo(models.Company);
    Skill.belongsToMany(models.User, {through: 'a_user_skill'});
  };
  return Skill;
};