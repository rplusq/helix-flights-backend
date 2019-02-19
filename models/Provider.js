const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Provider = sequelize.define('provider', {
    
  ProviderId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    Name: Sequelize.STRING,
    AnswerTime: Sequelize.DATE
});

module.exports = Provider;
