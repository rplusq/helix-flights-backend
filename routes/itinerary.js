const express = require('express');

const itineraryController = require('../controllers/itinerary');

const router = express.Router();

//Gets all the itineraries in the database
router.get('/', itineraryController.getAll);

//Creates a specific itinerary in the database
router.post('/add',itineraryController.post);

//Creates a specific itinerary in the database
router.put('/update',itineraryController.put);

//Deletes a specific itinerary from the database
router.delete('/delete/:id',itineraryController.delete);

router.get('/:id', itineraryController.getById);

module.exports = router;