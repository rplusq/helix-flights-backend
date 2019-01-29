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

  date: Sequelize.DATE,         //Date of the departure

});

module.exports = Flight;