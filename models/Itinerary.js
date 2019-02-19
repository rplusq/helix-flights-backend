const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Itinerary = sequelize.define('itinerary', {

  ItineraryId: 
  {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  Duration: Sequelize.TIME,

});

module.exports = Itinerary;