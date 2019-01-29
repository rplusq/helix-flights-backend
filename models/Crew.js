const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Crew = sequelize.define('crew', {

  id: 
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  passport: Sequelize.INTEGER,
  name: Sequelize.STRING,
  lastname: Sequelize.STRING,
  role: Sequelize.STRING,

});

module.exports = Crew;
