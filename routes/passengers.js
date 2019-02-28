const express = require('express');

const passengersController = require('../controllers/passengers');

const router = express.Router();

//Gets all the passengers in the database
router.get('/', passengersController.getAll);

//Creates a specific passenger in the database
router.post('/add',passengersController.post);

//Creates a specific passenger in the database
router.put('/update',passengersController.put);

//Deletes a specific passenger from the database
router.delete('/delete/:id',passengersController.delete);

router.get('/:id', passengersController.getById);

module.exports = router;