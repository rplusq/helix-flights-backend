const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); //Database instance 
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // Allows Cross Origin Request

// Middleware
const logger = require('./middleware/logger');

// Routes
const clientsRoutes = require('./routes/clients');
const airportsRoutes = require('./routes/airports');
const crewRoutes = require('./routes/crew');
const flightsRoutes = require('./routes/flights');
const flightTicketsRoutes = require('./routes/flightTickets');
const itineraryRoutes = require('./routes/itinerary');
const maintenanceRoutes = require('./routes/maintenance');
const manufacturersRoutes = require('./routes/manufacturers');
const passengersRoutes = require('./routes/passengers');
const planeModelsRoutes = require('./routes/planeModels');
const planesRoutes = require('./routes/planes');
const planeTicketsRoutes = require('./routes/planeTickets');
const providersRoutes = require('./routes/providers');

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


// Request's logger
app.use(logger);

app.use('/libros', (req, res, next) => {
  console.log('test libros');
  next();
})

// Tests route
app.get('/test', (req, res, next) =>{
  res.status(200).json({message: 'succesful test'});
});

// Router's

app.use('/airports', airportsRoutes);
app.use('/clients', clientsRoutes);
app.use('/crew', crewRoutes);
app.use('/flights', flightsRoutes);
app.use('/flightTickets', flightTicketsRoutes);
app.use('/itinerary', itineraryRoutes);
app.use('/maintenance', maintenanceRoutes);
app.use('/manufacturers', manufacturersRoutes);
app.use('/passengers', passengersRoutes);
app.use('/planes', planesRoutes);
app.use('/planeModels', planeModelsRoutes);
app.use('/planeTickets', planeTicketsRoutes);
app.use('/providers', providersRoutes);

// Start server in port 5500
// app.listen(5500);

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