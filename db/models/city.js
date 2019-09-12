'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING
  }, {tableName: "p_city" , paranoid: true});
  City.associate = function(models) {
    City.belongsTo(models.State);
  };
  return City;
};