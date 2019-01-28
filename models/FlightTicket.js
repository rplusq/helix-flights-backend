const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const FlightTicket= sequelize.define('flightticket', {

  id: 
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true

  },

  initialprice: Sequelize.FLOAT,          //Initial price of the ticket. Changes will depend on the date of purchase
  purchasedate: Sequelize.DATE,
  discount: Sequelize.FLOAT,
  discounttype: Sequelize.STRING,

});

module.exports = FlightTicket;