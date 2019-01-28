 const Sequelize = require('sequelize');

const sequelize = new Sequelize('helixflights', 'helixadmin', '123456helix', {
  dialect: 'mysql',
  host: 'aethersol.com',
  port: 3306
});


module.exports = sequelize;
 