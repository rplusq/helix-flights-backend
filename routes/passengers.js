const express = require('express');

const passengersController = require('../controllers/passengers');

const router = express.Router();

router.get('/', passengersController.getAll);


//Gets all the passengers in the database
router.get('/passenger',passengersController.getPassenger);

//Creates a specific passenger in the database
router.post('/add-passenger',passengersController.postPassenger);

//Deletes a specific passenger from the database
router.post('/delete-passenger',passengersController.postDeletePassenger);

router.get('/id/:id', passengersController.getById);

module.exports = router;