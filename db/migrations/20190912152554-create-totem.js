'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('totem', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      name: {
        type: Sequelize.STRING
      },
      totem_id: {
        type: Sequelize.STRING
      },
      monitor: {
        type: Sequelize.STRING
      },
      camera: {
        type: Sequelize.STRING
      },
      computer: {
        type: Sequelize.STRING
      },
      audio: {
        type: Sequelize.STRING
      },
      red: {
        type: Sequelize.STRING
      },
      equipment_force: {
        type: Sequelize.STRING
      },
      chasis: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('totem');
  }
};