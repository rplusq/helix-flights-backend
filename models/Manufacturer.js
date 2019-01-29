const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Manufacturer = sequelize.define('manufacturer',
  {
    id: //Identifier
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    name: Sequelize.STRING, //Name of the manufacturer
    country: Sequelize.STRING,

  });

module.exports = Manufacturer;
