const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//The model is used to define the object in the database
const Airport = sequelize.define('airport', {

  iatacode: 
  {
    type: Sequelize.STRING(3),
    allowNull: false,
    primaryKey: true
  },

  city: Sequelize.STRING,
  country: Sequelize.STRING,
  landdistance: { type: Sequelize.INTEGER, allowNull: false },
  takeoffdistance: { type: Sequelize.INTEGER, allowNull: false },

});

module.exports = Airport;