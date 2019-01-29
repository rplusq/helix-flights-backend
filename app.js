const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); //Database instance 
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // Allows Cross Origin Request

// Middleware, cada request que le haga a la base de datos se canaliza
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

// Import Models
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

//Relations
FlightTicket.belongsTo(Client); //We define this relation twice to clear how it works
Client.hasMany(FlightTicket);






// Request's logger
app.use(logger);  //Manages every request

app.use('/libros', (req, res, next) => {
  console.log('test libros');
  next();
})

// Tests route
app.get('/test', (req, res, next) =>{
  res.status(200).json({message: 'succesful test'});
});


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


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
// Models get their tables created
// Models get their tables created
sequelize.sync({ force: true })
//.sync()
  .then(result => {
    
    return Client.findByPk(1);
    console.log(result);
    app.listen(5500);
  }).then(client=> { if(!client)  {return Client.create({name:'Gi',lastname:'Gi', email:'gi'})}; return user; })
  .then(user=> {console.log(user);  app.listen(5500);})
  .catch(err => {
    console.log(err);
  });