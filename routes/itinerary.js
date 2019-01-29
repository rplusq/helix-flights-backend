const express = require('express');

const itineraryController = require('../controllers/itinerary');

const router = express.Router();

router.get('/', itineraryController.getAll);

//Gets all the itinerarys in the database
router.get('/itinerary',itineraryController.getItinerary);

//Creates a specific itinerary in the database
router.post('/add-itinerary',itineraryController.postItinerary);

//Creates a specific itinerary in the database
router.put('/update-itinerary',itineraryController.putItinerary);

//Deletes a specific itinerary from the database
router.delete('/delete-itinerary',itineraryController.deleteItinerary);

router.get('/id/:id', itineraryController.getById);

module.exports = router;