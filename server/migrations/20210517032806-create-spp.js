'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('spps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bulan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tahun: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nominal: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      isPay: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'siswas', // name of Target Table
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('spps');
  }
};