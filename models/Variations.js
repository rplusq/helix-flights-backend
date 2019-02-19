const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Passenger = sequelize.define('variations', {
    
    Type: Sequelize.STRING,
    Variation: Sequelize.INTEGER
    
});

module.exports = Passenger;