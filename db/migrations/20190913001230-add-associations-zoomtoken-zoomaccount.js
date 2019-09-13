'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'zoom_token',
      'zoom_account',
      {
        type: Sequelize.UUID,
        references: {
          model: 'zoom_account',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'zoom_token',
      'zoom_account'
    );
  }
};
