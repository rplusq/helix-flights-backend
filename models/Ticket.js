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
  LuggageNumber: Sequelize.DATE,


});

module.exports = Ticket;