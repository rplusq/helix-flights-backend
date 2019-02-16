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
    fc_seats: { type: Sequelize.INTEGER, allowNull: false },
    eco_seats: { type: Sequelize.INTEGER, allowNull: false },
    max_speed: { type: Sequelize.INTEGER, allowNull: false },
    cruising_speed: { type: Sequelize.INTEGER, allowNull: false },
    empty_weight: { type: Sequelize.INTEGER, allowNull: false },
    max_weight: { type: Sequelize.INTEGER, allowNull: false },
    internet: Sequelize.BOOLEAN,
    tv: Sequelize.BOOLEAN,
    bathrooms: { type: Sequelize.INTEGER, allowNull: false },
    exits: { type: Sequelize.INTEGER, allowNull: false },
    takeoff_distance: { type: Sequelize.INTEGER, allowNull: false },
    land_distance: { type: Sequelize.INTEGER, allowNull: false },
    cabin_luggage: { type: Sequelize.INTEGER, allowNull: false },
    gas_liters: { type: Sequelize.INTEGER, allowNull: false },
    gas_type: { type: Sequelize.INTEGER, allowNull: false },





  });

module.exports = PlaneModel;
