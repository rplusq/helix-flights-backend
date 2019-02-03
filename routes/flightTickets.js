const express = require('express');

const flightTicketsController = require('../controllers/flightTickets');

const router = express.Router();

//Gets all the flight tickets in the database
router.get('/', flightTicketsController.getAll);

//Creates a specific flight tickets in the database
router.post('/add',flightTicketsController.postFlightTicket);

//Creates a specific flight tickets in the database
router.put('/update',flightTicketsController.postFlightTicket);

//Deletes a specific flight tickets from the database
router.delete('/delete/:id',flightTicketsController.deleteFlightTicket);

router.get('/:id', flightTicketsController.getById);

module.exports = router;