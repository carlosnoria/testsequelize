'use strict';
module.exports = (sequelize, DataTypes) => {
  const Call = sequelize.define('Call', {
    evaluation: DataTypes.INTEGER
  }, {tableName: "call" , paranoid: true});
  Call.associate = function(models) {
    Call.belongsTo(models.User);
    Call.belongsTo(models.Totem);
  };
  return Call;
};