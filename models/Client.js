const Sequelize = require('sequelize'); //Sequelize Constructor 

const sequelize = require('../util/database');

const Client = sequelize.define('client', {

  ClientId: 
  {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  FirstName: Sequelize.STRING,
  LastName: Sequelize.STRING,
  Email: Sequelize.STRING,

});

module.exports = Client;