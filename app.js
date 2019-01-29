const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); //Database instance 
const cors = require('cors');
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json() );       // to support JSON-encoded bodies

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
const PlaneMaintenance = require('./models/Maintenance');
const PlaneModel = require('./models/PlaneModel');
const PlaneTicket = require('./models/PlaneTicket');
const Provider = require('./models/Provider');

//Relations
Provider.hasMany(Plane, { foreignKey: 'planeId', sourceKey: 'licenseplate' });
Provider.hasMany(Provider, { foreignKey: 'providerId', sourceKey: 'id' });
Crew.belongsToMany(Flight, { through: 'crew-flight', foreignKey: 'crewId' });
Flight.belongsToMany(Crew, { through: 'crew-flight', foreignKey: 'id' });
PlaneModel.hasMany(Plane, { foreingKey: 'idmodel', sourceKey: 'id' });
Manufacturer.hasMany(PlaneModel, { foreingKey: 'idmanufacturer', sourceKey: 'id' });
FlightTicket.hasMany(PlaneTicket, { foreingKey: 'idflightticket', sourceKey: 'id' });
Passenger.hasMany(PlaneTicket, { foreingKey: 'idpassenger', sourceKey: 'id' });
Plane.hasMany(Flights, { foreingKey: 'plane', sourceKey: 'licenseplate' });
Itinerary.hasMany(Flights, { foreingKey: 'iditinerary', sourceKey: 'id' });
Airport.hasOne(Itinerary, { foreingKey: 'iatadeparture', sourceKey: 'iatacode' });
Airport.hasOne(Itinerary, { foreingKey: 'iataarrival', sourceKey: 'iatacode' });
Maintenance.hasMany(Plane, { foreignKey: 'planeId', sourceKey: 'licenseplate' });
Maintenance.hasMany(Maintenance, { foreignKey: 'maintenanceId', sourceKey: 'id' });
PlaneTicket.belongsToMany(Flight, { through: 'planeticket-flight', foreignKey: 'id' });
Flight.belongsToMany(Crew, { through: 'planeticket-flight', foreignKey: 'id' });

app.use(async (req, res, next) => {
  const client = await Client.findByPk(1);
  console.log(client);
});

// Request's logger
app.use(logger);  //Manages every request

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

// Models get their tables created
sequelize.sync({force:true})
//.sync()
  .then(result => {
    
  
    console.log(result);
    app.listen(5500);
  }).catch(err => {
    console.log(err);
  });
