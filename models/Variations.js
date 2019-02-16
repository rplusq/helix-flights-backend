const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Passenger = sequelize.define('variations', {
    
    variation_type: Sequelize.STRING,
    variation: Sequelize.INTEGER


});

module.exports = Passenger;