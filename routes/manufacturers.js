const express = require('express');

const manufacturersController = require('../controllers/manufacturers');

const router = express.Router();

router.get('/', manufacturersController.getAll);

//Creates a specific manufacturer in the database
router.post('/add',manufacturersController.postManufacturer);

//Creates a specific manufacturer in the database
router.put('/update',manufacturersController.putManufacturer);

//Deletes a specific manufacturer from the database
router.delete('/delete/:id',manufacturersController.deleteManufacturer);

router.get('/:id', manufacturersController.getById);

module.exports = router;