const express = require('express');

const passengersController = require('../controllers/passengers');

const router = express.Router();

//Gets all the passengers in the database
router.get('/', passengersController.getAll);

//Creates a specific passenger in the database
router.post('/add',passengersController.postPassenger);

//Creates a specific passenger in the database
router.put('/update',passengersController.putPassenger);

//Deletes a specific passenger from the database
router.delete('/delete/:id',passengersController.deletePassenger);

router.get('/:id', passengersController.getById);

module.exports = router;