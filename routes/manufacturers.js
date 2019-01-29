const express = require('express');

const manufacturersController = require('../controllers/manufacturers');

const router = express.Router();

router.get('/', manufacturersController.getAll);


//Gets all the manufacturers in the database
router.get('/manufacturer',manufacturersController.getManufacturer);

//Creates a specific manufacturer in the database
router.post('/add-manufacturer',manufacturersController.postManufacturer);

//Creates a specific manufacturer in the database
router.put('/update-manufacturer',manufacturersController.putManufacturer);

//Deletes a specific manufacturer from the database
router.delete('/delete-manufacturer',manufacturersController.deleteManufacturer);

router.get('/id/:id', manufacturersController.getById);

module.exports = router;