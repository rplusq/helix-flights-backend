const express = require('express');

const providersController = require('../controllers/providers');

const router = express.Router();

router.get('/', providersController.getAll);

module.exports = router;