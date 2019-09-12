'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('company', {
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
      logo: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      commerce_contact_name: {
        type: Sequelize.STRING
      },
      commerce_contact_email: {
        type: Sequelize.STRING
      },
      commerce_contact_phone: {
        type: Sequelize.STRING
      },
      tech_contact_name: {
        type: Sequelize.STRING
      },
      tech_contact_email: {
        type: Sequelize.STRING
      },
      tech_contact_phone: {
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
    return queryInterface.dropTable('company');
  }
};