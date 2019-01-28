const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Passenger = sequelize.define('passenger', {

  id: 
  {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: Sequelize.STRING,       
  lastname: Sequelize.STRING,
  passport: {  type: Sequelize.INTEGER, allowNull: false},
  age: { type: Sequelize.INTEGER, allowNull: false },
  country: Sequelize.STRING,


});

module.exports = Passenger;