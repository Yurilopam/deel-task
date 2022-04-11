'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Profiles', 
    [
      {
        first_name: 'Harry',
        last_name: 'Potter',
        profession: 'Wizard',
        balance: 1150,
        type:'client',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Mr',
        last_name: 'Robot',
        profession: 'Hacker',
        balance: 231.11,
        type:'client',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'John',
        last_name: 'Snow',
        profession: 'Knows nothing',
        balance: 451.3,
        type:'client',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Ash',
        last_name: 'Kethcum',
        profession: 'Pokemon master',
        balance: 1.3,
        type:'client',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'John',
        last_name: 'Lenon',
        profession: 'Musician',
        balance: 64,
        type:'contractor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Linus',
        last_name: 'Torvalds',
        profession: 'Programmer',
        balance: 1214,
        type:'contractor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Alan',
        last_name: 'Turing',
        profession: 'Programmer',
        balance: 22,
        type:'contractor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Aragorn',
        last_name: 'II Elessar Telcontarvalds',
        profession: 'Fighter',
        balance: 314,
        type:'contractor',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {});
  }
}
