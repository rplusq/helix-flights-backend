const express = require('express');

const flightTicketsController = require('../controllers/flightTickets');

const router = express.Router();

router.get('/', flightTicketsController.getAll);

module.exports = router;