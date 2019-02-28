const express = require('express');

const flightsController = require('../controllers/flights');

const router = express.Router();

//Gets all the flights in the database
router.get('/', flightsController.getAll);

//Creates a specific flight in the database
router.post('/add',flightsController.post);

//Updates a specific flight in the database
router.put('/update',flightsController.put);

//Deletes a specific flight from the database
router.delete('/delete/:id',flightsController.delete);

router.get('/:id', flightsController.getById);

module.exports = router;