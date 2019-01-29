const express = require('express');

const itineraryController = require('../controllers/itinerary');

const router = express.Router();

router.get('/', itineraryController.getAll);

module.exports = router;