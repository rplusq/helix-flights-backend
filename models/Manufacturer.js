const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Manufacturer = sequelize.define('manufacturer',
  {
    ManufacturerId: //Identifier
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    Name: Sequelize.STRING, //Name of the manufacturer
    Country: Sequelize.STRING,

  });

module.exports = Manufacturer;
