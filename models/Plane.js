const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Plane = sequelize.define('plane', {

  licenseplate: 
  {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },

  medicalsupplies: { type: Sequelize.INTEGER, allowNull: false },
  crewnumber: { type: Sequelize.INTEGER, allowNull: false },
  status: Sequelize.STRING,
  
});

module.exports = Plane;
