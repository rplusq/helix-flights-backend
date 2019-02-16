const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//The model is used to define the object in the database
const Track = sequelize.define('tracks', {

    number:
    {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    distance: Sequelize.INTEGER
});

module.exports = Track;