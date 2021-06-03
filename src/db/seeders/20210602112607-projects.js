'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projects', [{
      userId: 1,
      name: 'John Doe Project',
      price: 10.21,
    },
    {
      userId: 2,
      name: 'Fabio Santos Project',
      price: 5.10
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
