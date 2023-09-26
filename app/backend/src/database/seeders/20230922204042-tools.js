'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tools', [
      {
        nome: 'Chave de fenda',
        descricao: 'Chave de fenda com pontas intercambiáveis',
        status: 'Disponível',
        data_coleta: new Date(),
        data_devolucao: null,
        mecanico_reservou: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Martelo',
        descricao: 'Martelo com cabo de madeira',
        status: 'Reservado',
        data_coleta: new Date(),
        data_devolucao: new Date(),
        mecanico_reservou: 'João',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Serrote',
        descricao: 'Serrote com lâmina de aço',
        status: 'Disponível',
        data_coleta: new Date(),
        data_devolucao: null,
        mecanico_reservou: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Fita métrica',
        descricao: 'Fita métrica em aço inox',
        status: 'Reservado',
        data_coleta: new Date(),
        data_devolucao: new Date(),
        mecanico_reservou: 'Maria',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Nível',
        descricao: 'Nível de bolha com escala em milímetros',
        status: 'Disponível',
        data_coleta: new Date(),
        data_devolucao: null,
        mecanico_reservou: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Reverter a inserção dos dados
    await queryInterface.bulkDelete('Tools', null, {});
  }
};