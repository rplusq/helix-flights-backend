const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Bill = sequelize.define('bill', {

  id: 
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true

  },

  initial_price: Sequelize.FLOAT,          //Initial price of the ticket. Changes will depend on the date of purchase
  purchase_date: Sequelize.DATE,
  discount_type: Sequelize.STRING,

});

module.exports = Bill;