'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('jobs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(12,2),
        allowNull: false
      },
      paid: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      payment_date: {
        type: Sequelize.DATE
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      contract_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'contracts', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('jobs')
  }
};
