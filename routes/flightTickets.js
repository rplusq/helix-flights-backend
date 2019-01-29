const express = require('express');

const flightTicketsController = require('../controllers/flightTickets');

const router = express.Router();

//Gets all the flight tickets in the database
router.get('/', flightTicketsController.getAll);

//Creates a specific flight tickets in the database
router.post('/add',flightTicketsController.postFlightTicket)

//Deletes a specific flight tickets from the database
router.post('/delete',flightTicketsController.postDeleteFlightTicket)

router.get('/id/:id', flightTicketsController.getById);

module.exports = router;