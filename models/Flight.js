const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Flight = sequelize.define('flight', {

  FlightId: 
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  Date: Sequelize.DATE,         //Date of the departure

});

module.exports = Flight;