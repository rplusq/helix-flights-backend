const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Crew = sequelize.define('crew', {

  passport: 
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },

  name: Sequelize.STRING,
  lastname: Sequelize.STRING,
  role: Sequelize.STRING,

});

module.exports = Crew;
