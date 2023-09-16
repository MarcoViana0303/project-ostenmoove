'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tools', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('Disponível', 'Reservado', 'Em Uso'),
        defaultValue: 'Disponível',
      },
      data_coleta: {
        type: Sequelize.DATE,
      },
      data_devolucao: {
        type: Sequelize.DATE,
      },
      mecanico_reservou: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },



  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('tools');
    
  }
};
