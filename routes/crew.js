const express = require('express');

const crewController = require('../controllers/crew');

const router = express.Router();

router.get('/', crewController.getAll);

module.exports = router;