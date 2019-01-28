const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const PlaneTicket = sequelize.define('planeticket', {

  id: 
  {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: Sequelize.STRING,
  duration: Sequelize.DATE,


});

module.exports = PlaneTicket;