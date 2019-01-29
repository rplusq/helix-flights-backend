const express = require('express');

const flightsController = require('../controllers/flights');

const router = express.Router();

router.get('/', flightsController.getAll);

//Gets all the flights in the database
router.get('/flights',flightsController.getFlight);

//Creates a specific flight in the database
router.post('/add-flight',flightsController.postFlight);

//Updates a specific flight in the database
router.put('/update-flight',flightsController.putFlight);

//Deletes a specific flight from the database
router.delete('/delete-flight',flightsController.deleteFlight);

router.get('/id/:id', flightsController.getById);

module.exports = router;