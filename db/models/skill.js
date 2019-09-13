'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING
  }, {tableName: "skill" , paranoid: true});
  Skill.associate = function(models) {
    Skill.belongsTo(models.Company);
  };
  return Skill;
};