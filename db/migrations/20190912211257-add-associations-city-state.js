'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'p_city',
      'state',
      {
       type: Sequelize.UUID,
       references: {
         model: 'p_state',
         key: 'id' 
       },
       onUpdate: 'CASCADE',
       onDelete: 'SET NULL'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'p_city',
      'state'
    );
  }
};
