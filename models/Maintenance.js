const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Maintenance = sequelize.define('maintenance', {

  MaintenanceId: 
  {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },

  Name: Sequelize.STRING,
  Duration: Sequelize.TIME,

});

module.exports = Maintenance;
