const express = require('express');

const flightsController = require('../controllers/flights');

const router = express.Router();

router.get('/', flightsController.getAll);

module.exports = router;