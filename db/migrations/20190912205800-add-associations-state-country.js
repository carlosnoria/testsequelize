'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
     'p_state',
     'country',
     {
      type: Sequelize.UUID,
      references: {
        model: 'p_country',
        key: 'id' 
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
     }
   );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'p_state',
      'country'
    );
  }
};
