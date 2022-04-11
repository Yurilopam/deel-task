'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Jobs', 
    [
      {
        description: 'work',
        price: 200,
        contract_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 201,
        contract_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 202,
        contract_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 200,
        contract_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 200,
        contract_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 2020,
        paid: true,
        payment_date: '2020-08-15T19:11:26.737Z',
        contract_id: 7,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 200,
        paid: true,
        payment_date: '2020-08-15T19:11:26.737Z',
        contract_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 200,
        paid: true,
        payment_date: '2020-08-16T19:11:26.737Z',
        contract_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 200,
        paid: true,
        payment_date: '2020-08-17T19:11:26.737Z',
        contract_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 200,
        paid: true,
        payment_date: '2020-08-17T19:11:26.737Z',
        contract_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 21,
        paid: true,
        payment_date: '2020-08-10T19:11:26.737Z',
        contract_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 21,
        paid: true,
        payment_date: '2020-08-15T19:11:26.737Z',
        contract_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 121,
        paid: true,
        payment_date: '2020-08-15T19:11:26.737Z',
        contract_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        description: 'work',
        price: 121,
        paid: true,
        payment_date: '2020-08-14T23:11:26.737Z',
        contract_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Jobs', null, {});
  }
};
