const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const PlaneModel = sequelize.define('PlaneModel',
  {
    PlaneModelId: //Identifier
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true

    },

    Model: Sequelize.STRING, //name of the model's plane
    FirstClassSeats: { type: Sequelize.INTEGER, allowNull: false },
    EconomicSeats: { type: Sequelize.INTEGER, allowNull: false },
    MaxSpeed: { type: Sequelize.INTEGER, allowNull: false },
    CruisingSpeed: { type: Sequelize.INTEGER, allowNull: false },
    EmptyWeight: { type: Sequelize.INTEGER, allowNull: false },
    MaxWeight: { type: Sequelize.INTEGER, allowNull: false },
    Internet: Sequelize.BOOLEAN,
    Tv: Sequelize.BOOLEAN,
    Bathrooms: { type: Sequelize.INTEGER, allowNull: false },
    Exits: { type: Sequelize.INTEGER, allowNull: false },
    TakeoffDistance: { type: Sequelize.INTEGER, allowNull: false },
    LandDistance: { type: Sequelize.INTEGER, allowNull: false },
    CabinLuggage: { type: Sequelize.INTEGER, allowNull: false },
    GasLiters: { type: Sequelize.INTEGER, allowNull: false },
    GasType: { type: Sequelize.INTEGER, allowNull: false },





  });

module.exports = PlaneModel;
