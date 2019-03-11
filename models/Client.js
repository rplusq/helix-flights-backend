const Sequelize = require('sequelize'); //Sequelize Constructor 

const sequelize = require('../util/database');

const Client = sequelize.define('Client', {

  Email:
  {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },

  FirstName: Sequelize.STRING,
  LastName: Sequelize.STRING
});

module.exports = Client;