const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Passenger = sequelize.define('Passenger', {

  PassengerId:
  {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  FirstName: Sequelize.STRING,
  LastName: Sequelize.STRING,
  Passport: { type: Sequelize.INTEGER, allowNull: false },
  BirthDate: { type: Sequelize.DATE, allowNull: false },
  Country: Sequelize.STRING,

});

module.exports = Passenger;