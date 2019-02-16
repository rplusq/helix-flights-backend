const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//The model is used to define the object in the database
const Airport = sequelize.define('airport', {

  iata_code: 
  {
    type: Sequelize.STRING(3),
    allowNull: false,
    primaryKey: true
  },

  city: Sequelize.STRING,
  country: Sequelize.STRING
});

module.exports = Airport;