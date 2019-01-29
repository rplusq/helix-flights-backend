const express = require('express');

const maintenanceController = require('../controllers/maintenance');

const router = express.Router();

router.get('/', maintenanceController.getAll);

module.exports = router;