'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Practitioners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contact: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false
      },
      workingDays: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      startTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      endTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      permanentAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      temporaryAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isSpecialist: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: false
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Practitioners');
  }
};
