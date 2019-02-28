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
const billsRoutes = require('./routes/bills');
const itineraryRoutes = require('./routes/itinerary');
const maintenanceRoutes = require('./routes/maintenance');
const manufacturersRoutes = require('./routes/manufacturers');
const passengersRoutes = require('./routes/passengers');
const planeModelsRoutes = require('./routes/planeModels');
const planesRoutes = require('./routes/planes');
const ticketsRoutes = require('./routes/tickets');
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
const Ticket = require('./models/Ticket');
const Provider = require('./models/Provider');
const ProviderPlane = require('./models/ProviderPlane');
const PlaneMaintenance = require('./models/PlaneMaintenance');
const Track = require('./models/Track');
const Variation = require('./models/Variation');

//Relations

//Relations N:M
Plane.belongsToMany(Provider, { through: ProviderPlane, foreignKey: 'LicensePlate' });
Provider.belongsToMany(Plane, { through: ProviderPlane , foreignKey: 'ProviderId' });
Crew.belongsToMany(Flight, { through: 'CrewFlight', foreignKey: 'CrewId' });
Flight.belongsToMany(Crew, { through: 'CrewFlight', foreignKey: 'FlightId' });
Plane.belongsToMany(Maintenance, { through: PlaneMaintenance, foreignKey: 'PlaneId' });
Maintenance.belongsToMany(Plane, { through: PlaneMaintenance, foreignKey: 'MaintenanceId' });

//Relations 1:N
PlaneModel.hasMany(Plane, { foreignKey: 'FKPlaneModel_PlaneModelId', sourceKey: 'PlaneModelId' });
Manufacturer.hasMany(PlaneModel, { foreignKey: 'FKManufacturer_ManufacturerId', sourceKey: 'ManufacturerId' });
Bill.hasMany(Ticket, { foreignKey: 'FKBill_BillId', sourceKey: 'BillId' });
Passenger.hasMany(Ticket, { foreignKey: 'FKPassenger_PassengerId', sourceKey: 'PassengerId' });
Plane.hasMany(Flight, { foreignKey: 'FKPlane_LicensePlate', sourceKey: 'LicensePlate' });
Itinerary.hasMany(Flight, { foreignKey: 'FKPlane_ItineraryId', sourceKey: 'ItineraryId' });
Ticket.hasMany(Flight, { foreignKey: 'FKTicket_TicketId', sourceKey: 'TicketId' });
Client.hasMany(Bill, { foreignKey: 'FKClient_ClientId', sourceKey: 'ClientId' });
Airport.hasMany(Track, { foreignKey: 'FKAirport_IataCode', sourceKey: 'IataCode' });
Bill.hasMany(Variation ,{ foreignKey: 'FKBill_BillId', sourceKey: 'BillId' });

//Relations 1:1
Airport.hasOne(Itinerary, { as:'IataDeparture', foreignKey: 'IataCode'});
Airport.hasOne(Itinerary, { as:'IataArrival', foreignKey: 'IataCode'});

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
app.use('/bills', billsRoutes);
app.use('/itinerary', itineraryRoutes);
app.use('/maintenance', maintenanceRoutes);
app.use('/manufacturers', manufacturersRoutes);
app.use('/passengers', passengersRoutes);
app.use('/planes', planesRoutes);
app.use('/planeModels', planeModelsRoutes);
app.use('/tickets', ticketsRoutes);
app.use('/providers', providersRoutes);

// Models get their tables created
sequelize. 
sync({force:true})
// sync()
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