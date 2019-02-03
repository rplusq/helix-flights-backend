const express = require('express');

const itineraryController = require('../controllers/itinerary');

const router = express.Router();

router.get('/', itineraryController.getAll);

//Creates a specific itinerary in the database
router.post('/add',itineraryController.postItinerary);

//Creates a specific itinerary in the database
router.put('/update',itineraryController.putItinerary);

//Deletes a specific itinerary from the database
router.delete('/delete/:id',itineraryController.deleteItinerary);

router.get('/:id', itineraryController.getById);

module.exports = router;