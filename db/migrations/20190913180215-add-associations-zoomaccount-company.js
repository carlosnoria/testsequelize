'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'zoom_account',
      'company',
      {
        type: Sequelize.UUID,
        references: {
          model: 'company',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'zoom_account',
      'company'
    );
  }
};
