const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Variation = sequelize.define('Variation', {
    
    Type: Sequelize.STRING,
    Variation: Sequelize.INTEGER
    
});

module.exports = Variation;