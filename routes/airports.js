const express = require('express');

const airportsController = require('../controllers/airports');

const router = express.Router();

//Gets all the airports in the database
router.get('/', airportsController.getAll);

//Creates a specific airport in the database
router.post('/add',airportsController.postAirport);

//Deletes a specific airport from the database
router.delete('/delete/:iatacode',airportsController.deleteAirport);

//Updates a specific airport from the database

router.put('/update', airportsController.updateAirport);

router.get('/id', airportsController.getById);

module.exports = router;