const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Provider = sequelize.define('provider', {
    
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    name: Sequelize.STRING,
    answer_time: Sequelize.DATE
});

module.exports = Provider;
