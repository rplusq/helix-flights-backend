const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Maintenance = sequelize.define('maintenance', {

  id: 
  {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },

  name: Sequelize.STRING,
  duration: Sequelize.TIME,

});

module.exports = Maintenance;
