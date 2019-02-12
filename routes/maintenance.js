const express = require('express');

const maintenanceController = require('../controllers/maintenance');

const router = express.Router();

//Gets all the maintenance in the database
router.get('/', maintenanceController.getAll);

//Creates a specific Maintenance in the database
router.post('/add',maintenanceController.postMaintenance);

//Creates a specific Maintenance in the database
router.put('/update',maintenanceController.putMaintenance);

//Deletes a specific Maintenance from the database
router.delete('/delete/:id',maintenanceController.deleteMaintenance);

router.get('/:id', maintenanceController.getById);

module.exports = router;