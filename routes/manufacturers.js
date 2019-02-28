const express = require('express');

const manufacturersController = require('../controllers/manufacturers');

const router = express.Router();

//Gets all the manufacturers in the database
router.get('/', manufacturersController.getAll);

//Creates a specific manufacturer in the database
router.post('/add',manufacturersController.post);

//Creates a specific manufacturer in the database
router.put('/update',manufacturersController.put);

//Deletes a specific manufacturer from the database
router.delete('/delete/:id',manufacturersController.delete);

router.get('/:id', manufacturersController.getById);

module.exports = router;