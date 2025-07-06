'use strict';

/**
 * @module CreateUserProfilesMigration
 * @description Migration for creating the User Profiles table
 */
module.exports = {
  /**
   * @function up
   * @description Method to create the User Profiles table
   * @param {object} queryInterface - The interface for querying the database
   * @param {object} Sequelize - The Sequelize library
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_profiles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      display_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      dob: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      gender: {
        type: Sequelize.ENUM('male', 'female', 'other', 'prefer_not_to_say'),
        allowNull: true,
      },
      marital_status: {
        type: Sequelize.ENUM('single', 'married', 'divorced', 'widowed', 'separated'),
        allowNull: true,
      },
      height: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true,
      },
      weight: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true,
      },
      complexion: {
        type: Sequelize.ENUM('fair', 'medium', 'olive', 'brown', 'dark'),
        allowNull: true,
      },
      body_type: {
        type: Sequelize.ENUM('slim', 'athletic', 'average', 'curvy', 'heavy'),
        allowNull: true,
      },
      profile_photo_url: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      about_me: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      created_by: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      profile_visibility: {
        type: Sequelize.ENUM('public', 'private', 'friends_only', 'restricted'),
        allowNull: false,
        defaultValue: 'public',
      },
      profile_completion_percentage: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
        defaultValue: 0,
      },
      last_active: {
        type: Sequelize.DATE,
        allowNull: true,
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

    // Add indexes
    await queryInterface.addIndex('user_profiles', ['user_id']);
    await queryInterface.addIndex('user_profiles', ['created_by']);
    await queryInterface.addIndex('user_profiles', ['profile_visibility']);
    await queryInterface.addIndex('user_profiles', ['last_active']);
  },

  /**
   * @function down
   * @description Method to drop the User Profiles table
   * @param {object} queryInterface - The interface for querying the database
   * @param {object} Sequelize - The Sequelize library
   */
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_profiles');
  },
};
