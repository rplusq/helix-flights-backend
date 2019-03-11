const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Ticket = sequelize.define('Ticket', {

  TicketId:
  {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  AssignedSeat: Sequelize.STRING,
  CheckIn: Sequelize.BOOLEAN,
  LuggageNumber: Sequelize.DATE,
  OverSold: Sequelize.BOOLEAN
});

module.exports = Ticket;