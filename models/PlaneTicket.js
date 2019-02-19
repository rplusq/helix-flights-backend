const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const PlaneTicket = sequelize.define('planeticket', {

  PlaneTicketId: 
  {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  AssignedSeat: Sequelize.STRING,
  LuggageNumber: Sequelize.DATE,


});

module.exports = PlaneTicket;