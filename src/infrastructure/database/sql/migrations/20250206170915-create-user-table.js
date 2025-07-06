'use strict';

/**
 * @module CreateUsersMigration
 * @description Migration for creating the Users table
 */
module.exports = {
  /**
   * @function up
   * @description Method to create the Users table
   * @param {object} queryInterface - The interface for querying the database
   * @param {object} Sequelize - The Sequelize library
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      phone_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      account_status: {
        type: Sequelize.ENUM('active', 'inactive', 'suspended', 'pending'),
        allowNull: false,
        defaultValue: 'pending',
      },
      registration_for: {
        type: Sequelize.ENUM('personal', 'business', 'organization', 'other'),
        allowNull: false,
        defaultValue: 'personal',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  /**
   * @function down
   * @description Method to drop the Users table
   * @param {object} queryInterface - The interface for querying the database
   * @param {object} Sequelize - The Sequelize library
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
