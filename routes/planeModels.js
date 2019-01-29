const express = require('express');

const planeModelsController = require('../controllers/planeModels');

const router = express.Router();

router.get('/', planeModelsController.getAll);

module.exports = router;