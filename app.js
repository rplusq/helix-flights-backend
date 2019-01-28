const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); //Database instance 
const app = express();

// Middleware, cada request que le haga a la base de datos se canaliza
const logger = require('./middleware/logger');

// Routers
const clientsRoutes = require('./routes/clients');

// Models
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

// Request's logger
app.use(logger);  //Manages every request

// Tests route
app.get('/test', (req, res, next) =>{
  res.status(200).send({message: 'succesful test'});
});


// Router's 
//Alguien pide acceso a clientes,
app.use('/airports', airportRoutes);
app.use('/clients', clientsRoutes);   
app.use('/crew', crewRoutes);
app.use('/flights', flightsRoutes);
app.use('/flightTickets', flightTicketsRoutes);
app.use('/itinerary', itineraryRoutes);
app.use('/manufacturers', manufacturersRoutes);
app.use('/passengers', passengersRoutes);
app.use('/planes', planesRoutes);
app.use('/manteinance', manteinanceRoutes);
app.use('/planeModel', planeModelsRoutes);
app.use('/planeTickets', planeTicketsRoutes);
app.use('/providers', providersRoutes);

// Start server in port 5500
app.listen(5500);

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