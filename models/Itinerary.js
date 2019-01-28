const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Itinerary = sequelize.define('itinerary', {

  id: 
  {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  iatadeparture: Sequelize.STRING(3),
  iataarrival: Sequelize.STRING(3),
  duration: Sequelize.TIME,

});

module.exports = Itinerary;