'use strict';
module.exports = (sequelize, DataTypes) => {
  const Call = sequelize.define('Call', {
    evaluation: DataTypes.INTEGER
  }, {tableName: "call" , paranoid: true});
  Call.associate = function(models) {
    // associations can be defined here
  };
  return Call;
};