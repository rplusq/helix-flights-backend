const express = require('express');

const passengersController = require('../controllers/passengers');

const router = express.Router();

router.get('/', passengersController.getAll);


//Gets all the passengers in the database
router.get('/passenger',passengersController.getPassengers);

//Creates a specific passenger in the database
router.post('/add-passenger',passengersController.postPassenger);

//Creates a specific passenger in the database
router.put('/update-passenger',passengersController.putPassenger);

//Deletes a specific passenger from the database
router.delete('/delete-passenger',passengersController.deletePassenger);

router.get('/id/:id', passengersController.getById);

module.exports = router;