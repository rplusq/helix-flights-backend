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
  last_name: Sequelize.STRING,
  passport: {  type: Sequelize.INTEGER, allowNull: false},
  birth_date: { type: Sequelize.DATE, allowNull: false },
  country: Sequelize.STRING,


});

module.exports = Passenger;