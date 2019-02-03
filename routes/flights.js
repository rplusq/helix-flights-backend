const express = require('express');

const flightsController = require('../controllers/flights');

const router = express.Router();

router.get('/', flightsController.getAll);

//Creates a specific flight in the database
router.post('/add',flightsController.postFlight);

//Updates a specific flight in the database
router.put('/update',flightsController.putFlight);

//Deletes a specific flight from the database
router.delete('/delete/:id',flightsController.deleteFlight);

router.get('/:id', flightsController.getById);

module.exports = router;