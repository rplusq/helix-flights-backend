const express = require('express');

const itineraryController = require('../controllers/itinerary');

const router = express.Router();

router.get('/', itineraryController.getAll);

//Gets all the itinerarys in the database
router.get('/itinerary',itineraryController.getItinerary);

//Creates a specific itinerary in the database
router.post('/add-itinerary',itineraryController.postItinerary);

//Deletes a specific itinerary from the database
router.post('/delete-itinerary',itineraryController.postDeleteitinerary);

router.get('/id/:id', itineraryController.getById);

module.exports = router;