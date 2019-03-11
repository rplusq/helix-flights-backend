const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//The model is used to define the object in the database
const PlaneMaintenance = sequelize.define('PlaneMaintenance', {
    StartDate: Sequelize.DATE
});

module.exports = PlaneMaintenance;