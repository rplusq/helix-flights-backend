const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Bill = sequelize.define('Bill', {

  BillId: 
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true

  },

  BasePrice: Sequelize.FLOAT,          //Initial price of the ticket. Changes will depend on the date of purchase
  PurchaseDate: Sequelize.DATE,
});

module.exports = Bill;