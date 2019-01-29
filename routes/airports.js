const express = require('express');

const airportsController = require('../controllers/airports');

const router = express.Router();

router.get('/', airportsController.getAll);

module.exports = router;