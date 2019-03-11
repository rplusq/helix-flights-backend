const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Itinerary = sequelize.define('Itinerary', {

  ItineraryId:
  {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  Duration: Sequelize.TIME,
  EconomyPrice: Sequelize.INTEGER,
  FirstClassPrice: Sequelize.INTEGER
});

module.exports = Itinerary;