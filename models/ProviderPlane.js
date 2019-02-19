const Sequelize = require('sequelize');

const sequelize = require('../util/database');

//The model is used to define the object in the database
const ProviderPlane = sequelize.define('ProviderPlane', {


    KmPrice: Sequelize.INTEGER

});

module.exports = ProviderPlane;