'use strict';
module.exports = (sequelize, DataTypes) => {
  const ZoomAccount = sequelize.define('ZoomAccount', {
    name: DataTypes.STRING,
    api_key: DataTypes.STRING,
    api_secret: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {tableName: "zoom_account" , paranoid: true});
  ZoomAccount.associate = function(models) {
    ZoomAccount.hasMany(models.ZoomToken);
    ZoomAccount.belongsTo(models.Company);
  };
  return ZoomAccount;
};