const express = require('express');

const passengersController = require('../controllers/passengers');

const router = express.Router();

router.get('/', passengersController.getAll);

module.exports = router;