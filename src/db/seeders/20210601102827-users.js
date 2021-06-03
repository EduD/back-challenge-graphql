'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     */
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'john@doe.com',

    },
    {
      name: 'Fabio Santos',
      email: 'santos@fabio.com'
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete('Users', null, {});

  }
};