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

  asigned_seat: Sequelize.STRING,
  luggage_number: Sequelize.DATE,


});

module.exports = PlaneTicket;