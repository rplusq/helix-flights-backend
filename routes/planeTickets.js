const express = require('express');

const planeTicketsController = require('../controllers/planeTickets');

const router = express.Router();

router.get('/', planeTicketsController.getAll);

module.exports = router;