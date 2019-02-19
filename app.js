const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); //Database instance 
const cors = require('cors');
const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());       // to support JSON-encoded bodies

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
const Bill = require('./models/Bill');
const Itinerary = require('./models/Itinerary');
const Manufacturer = require('./models/Manufacturer');
const Passenger = require('./models/Passenger');
const Plane = require('./models/Plane');
const Maintenance = require('./models/Maintenance');
const PlaneModel = require('./models/PlaneModel');
const PlaneTicket = require('./models/PlaneTicket');
const Provider = require('./models/Provider');

//Relations
Plane.belongsToMany(Provider, { through: 'provider-plane', foreignKey: 'idplane' });
Provider.belongsToMany(Plane, { through: 'provider-plane', foreignKey: 'idprovider' });
Provider.hasMany(Provider, { foreignKey: 'providerId', sourceKey: 'id' });
Crew.belongsToMany(Flight, { through: 'crew-flight', foreignKey: 'crewId' });
Flight.belongsToMany(Crew, { through: 'crew-flight', foreignKey: 'id' });
PlaneModel.hasMany(Plane, { foreignKey: 'idmodel', sourceKey: 'id' });
Manufacturer.hasMany(PlaneModel, { foreignKey: 'idmanufacturer', sourceKey: 'id' });
FlightTicket.hasMany(PlaneTicket, { foreignKey: 'idflightticket', sourceKey: 'id' });
Passenger.hasMany(PlaneTicket, { foreignKey: 'idpassenger', sourceKey: 'id' });
Plane.hasMany(Flight, { foreignKey: 'plane', sourceKey: 'licenseplate' });
Itinerary.hasMany(Flight, { foreignKey: 'iditinerary', sourceKey: 'id' });
Airport.hasOne(Itinerary, { foreignKey: 'iatadeparture', sourceKey: 'iatacode' });
Airport.hasOne(Itinerary, { foreignKey: 'iataarrival', sourceKey: 'iatacode' });
Plane.belongsToMany(Maintenance, { through: 'plane-maintenance', foreignKey: 'idplane' })
Maintenance.belongsToMany(Plane, { through: 'plane-maintenance', foreignKey: 'idmaintenance' })
PlaneTicket.belongsToMany(Flight, { through: 'planeticket-flight', foreignKey: 'idplaneticket' });
Flight.belongsToMany(PlaneTicket, { through: 'planeticket-flight', foreignKey: 'idflight' })

// Request's logger
app.use(logger);  //Manages every request

// Tests route
app.get('/test', (req, res, next) => {
    res.status(200).json({ message: 'succesful test' });
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
sequelize. //sync({force:true})
sync()
    .then(result => {
        console.log(result);
        app.listen(5500);
    }).catch(err => {
        console.log(err);
    });

// sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
// .then(function() {
//     return sequelize
//         .sync({
//             force: true
//         });
// })
// .then(function() {
//     return sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
// })
// .then(function() {
//     console.log('Database synchronised.');
//     app.listen(5500);
// }, function(err) {
//     console.log(err);
// });