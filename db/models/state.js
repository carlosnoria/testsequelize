'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: DataTypes.STRING
  }, {tableName: "p_state" , paranoid: true});
  State.associate = function(models) {
    State.belongsTo(models.Country);
    State.hasMany(models.City);
    State.hasMany(models.Company);
  };
  return State;
};