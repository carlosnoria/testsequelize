'use strict';
module.exports = (sequelize, DataTypes) => {
  const Totem = sequelize.define('Totem', {
    name: DataTypes.STRING,
    totem_id: DataTypes.STRING,
    monitor: DataTypes.STRING,
    camera: DataTypes.STRING,
    computer: DataTypes.STRING,
    audio: DataTypes.STRING,
    red: DataTypes.STRING,
    equipment_force: DataTypes.STRING,
    chasis: DataTypes.STRING
  }, {tableName: "totem" , paranoid: true});
  Totem.associate = function(models) {
    Totem.hasMany(models.Call);
    Totem.belongsTo(models.Group);
  };
  return Totem;
};