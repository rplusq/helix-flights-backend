const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); //Database instance 
const app = express();

const Airport = require('./models/Airport');
const Client = require('./models/Client');
const Crew = require('./models/Crew');
const Flight = require('./models/Flight');
const FlightTicket = require('./models/FlightTicket');
const Itinerary = require('./models/Itinerary');
const Manufacturer = require('./models/Manufacturer');
const Passenger = require('./models/Passenger');
const Plane = require('./models/Plane');
const PlaneMaintenance = require('./models/PlaneMaintenance');
const PlaneModel = require('./models/PlaneModel');
const PlaneTicket = require('./models/PlaneTicket');
const Provider = require('./models/Provider');

app.use(bodyParser.urlencoded({ extended: false }));

// Models get their tables created
sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    console.log(result);
    app.listen(5500);
  })
  .catch(err => {
    console.log(err);
  });