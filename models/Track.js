const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//The model is used to define the object in the database
const Track = sequelize.define('Track', {

    Number:
    {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique:'compositeIndex'
    },
    Distance: Sequelize.INTEGER
});

module.exports = Track;