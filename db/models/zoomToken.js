'use strict';
module.exports = (sequelize, DataTypes) => {
  const ZoomToken = sequelize.define('ZoomToken', {
    token: DataTypes.STRING,
    is_busy: DataTypes.BOOLEAN
  }, {tableName: "zoom_token" , paranoid: true});
  ZoomToken.associate = function(models) {
    ZoomToken.belongsTo(models.ZoomAccount);
  };
  return ZoomToken;
};