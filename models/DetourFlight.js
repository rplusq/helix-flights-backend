const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const DetourFlight = sequelize.define('DetourFlight', {
    NewDuration: Sequelize.TIME,
    Motive: Sequelize.STRING
});

module.exports = DetourFlight;