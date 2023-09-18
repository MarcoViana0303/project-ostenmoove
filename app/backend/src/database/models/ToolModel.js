const {DataTypes} = require('sequelize');
const Sequelize = require('sequelize');
const config = require('../../../config/database');

const sequelize = new Sequelize(config);

const ToolModel = sequelize.define('Tool', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Disponível', 'Reservado', 'Em Uso'),
    defaultValue: 'Disponível',
    allowNull: false,
  },
  data_coleta: {
    type: DataTypes.DATE,
  },
  data_devolucao: {
    type: DataTypes.DATE,
  },
  mecanico_reservou: {
    type: DataTypes.STRING,
  },
});

module.exports = ToolModel;
