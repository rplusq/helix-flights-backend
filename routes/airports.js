const express = require('express');

const airportsController = require('../controllers/airports');

const router = express.Router();

router.get('/', airportsController.getAll);

//Gets all the airports in the database
router.get('/airports', airportsController.getAirports);

//Creates a specific client in the database
router.post('/add-airport',airportsController.postAirport);

//Deletes a specific client from the database
router.post('/delete-airport',airportsController.postDeleteAirport);

router.get('/id/:id', airportsController.getById);

module.exports = router;