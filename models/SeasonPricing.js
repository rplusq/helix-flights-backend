const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const SeasonPricing = sequelize.define('SeasonPricing', {

    SeasonPricingId:
    {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    SeasonStart: Sequelize.DATE,
    SeasonEnd: Sequelize.DATE,
    Variation: Sequelize.INTEGER
});

module.exports = SeasonPricing;