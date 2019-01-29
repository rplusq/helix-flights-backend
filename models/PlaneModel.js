const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const PlaneModel = sequelize.define('planemodel',
{
  id: //Identifier
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
    
  },
  
  model: Sequelize.STRING, //name of the model's plane
  fcseats: { type: Sequelize.INTEGER, allowNull: false },
  ecoseats: { type: Sequelize.INTEGER, allowNull: false },
  maxspeed: { type: Sequelize.INTEGER, allowNull: false },
  cruisingspeed: { type: Sequelize.INTEGER, allowNull: false },
  emptyweight: { type: Sequelize.INTEGER, allowNull: false },
  maxweight: { type: Sequelize.INTEGER, allowNull: false },
  internet: Sequelize.BOOLEAN,
  tv: Sequelize.BOOLEAN,
  bathrooms: { type: Sequelize.INTEGER, allowNull: false },
  exits: { type: Sequelize.INTEGER, allowNull: false },
  takeoffdistance: { type: Sequelize.INTEGER, allowNull: false },
  landdistance: { type: Sequelize.INTEGER, allowNull: false },
  cabinluggage: { type: Sequelize.INTEGER, allowNull: false },
  gasliters: { type: Sequelize.INTEGER, allowNull: false },
  gastype: { type: Sequelize.INTEGER, allowNull: false },




 
});

module.exports = PlaneModel;
