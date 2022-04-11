'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contracts', 
    [
      {
        terms: 'bla bla bla',
        status: 'terminated',
        client_id: 1,
        contractor_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        terms: 'bla bla bla',
        status: 'in_progress',
        client_id: 1,
        contractor_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        terms: 'bla bla bla',
        status: 'in_progress',
        client_id: 2,
        contractor_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        terms: 'bla bla bla',
        status: 'in_progress',
        client_id: 2,
        contractor_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        terms: 'bla bla bla',
        status: 'new',
        client_id: 3,
        contractor_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        terms: 'bla bla bla',
        status: 'in_progress',
        client_id: 3,
        contractor_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        terms: 'bla bla bla',
        status: 'in_progress',
        client_id: 4,
        contractor_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        terms: 'bla bla bla',
        status: 'in_progress',
        client_id: 4,
        contractor_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        terms: 'bla bla bla',
        status: 'in_progress',
        client_id: 4,
        contractor_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Contracts', null, {});
  }
}
