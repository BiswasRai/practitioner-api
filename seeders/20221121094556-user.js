'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Biswas',
        lastName: 'Biswas',
        email: 'biswas3@gmail.com',
        password: 'hello',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Biswas',
        lastName: 'Biswas',
        email: 'biswas1@gmail.com',
        password: 'hello',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
