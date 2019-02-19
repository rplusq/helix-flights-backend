const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Plane = sequelize.define('Plane', {

  LicensePlate: 
  {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },

  MedicalSupplies: { type: Sequelize.INTEGER, allowNull: false },
  crew_number: { type: Sequelize.INTEGER, allowNull: false },
  status: Sequelize.STRING,
  
});

module.exports = Plane;
