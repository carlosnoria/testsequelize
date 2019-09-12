'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    type: DataTypes.STRING,
    data: DataTypes.JSON
  }, {tableName: "asset" , paranoid: true});
  Asset.associate = function(models) {
    Asset.belongsTo(models.Template);
  };
  return Asset;
};