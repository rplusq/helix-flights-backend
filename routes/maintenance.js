const express = require('express');

const maintenanceController = require('../controllers/maintenance');

const router = express.Router();

router.get('/', maintenanceController.getAll);


//Gets all the Maintenances in the database
router.get('/maintenance',maintenanceController.getMaintenance);

//Creates a specific Maintenance in the database
router.post('/add-maintenance',maintenanceController.postMaintenance);

//Deletes a specific Maintenance from the database
router.post('/delete-maintenance',maintenanceController.postDeleteMaintenance);

router.get('/id/:id', maintenanceController.getById);

module.exports = router;