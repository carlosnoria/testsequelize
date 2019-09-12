'use strict';
module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    name: DataTypes.STRING
  }, {tableName: "p_country" , paranoid: true});
  Country.associate = function(models) {
    Country.hasMany(models.State);
  };
  return Country;
};