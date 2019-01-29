const express = require('express');

const flightTicketsController = require('../controllers/flightTickets');

const router = express.Router();

router.get('/', flightTicketsController.getAll);


//Gets all the flight tickets in the database
router.get('/flightstickets',flightTicketsController.getFlightTicket);

//Creates a specific flight tickets in the database
router.post('/add-flight-tickets',flightTicketsController.postFlightTicket)

//Deletes a specific flight tickets from the database
router.post('/delete-flight-tickets',flightTicketsController.postDeleteFlightTicket)

router.get('/id/:id', flightTicketsController.getById)
module.exports = router;