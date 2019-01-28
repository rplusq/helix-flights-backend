const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Flight = sequelize.define('flight', {

  id: 
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  plane: { type: Sequelize.INTEGER, allowNull: false },     //Must be the airplane identifier
  date: Sequelize.DATE,         //Date of the departure
  iditinerary: { type: Sequelize.INTEGER, allowNull: false },   //Specific route of the plane.

});

module.exports = Flight;