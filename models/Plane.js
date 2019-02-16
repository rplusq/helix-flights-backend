const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Plane = sequelize.define('plane', {

  license_plate: 
  {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },

  medical_supplies: { type: Sequelize.INTEGER, allowNull: false },
  crew_number: { type: Sequelize.INTEGER, allowNull: false },
  status: Sequelize.STRING,
  
});

module.exports = Plane;
