const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//The model is used to define the object in the database
const Airport = sequelize.define('airport', {

  IataCode: 
  {
    type: Sequelize.STRING(3),
    allowNull: false,
    primaryKey: true
  },

  City: Sequelize.STRING,
  Country: Sequelize.STRING
});

module.exports = Airport;