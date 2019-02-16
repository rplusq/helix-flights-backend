const Sequelize = require('sequelize'); //Sequelize Constructor 

const sequelize = require('../util/database');

const Client = sequelize.define('client', {

  id: 
  {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,

});

module.exports = Client;