const Sequelize = require('sequelize');

const sequelize = new Sequelize('helixflights', 'helixadmin', '123456helix', {
  dialect: 'mysql',
  host: 'aethersol.com'
});

module.exports = sequelize;