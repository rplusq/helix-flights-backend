const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Crew = sequelize.define('Crew', {

  CrewId: 
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  Passport: Sequelize.INTEGER,
  FirstName: Sequelize.STRING,
  LastName: Sequelize.STRING,
  Role: Sequelize.STRING,

});

module.exports = Crew;
