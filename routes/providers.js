const express = require('express');

const providersController = require('../controllers/providers');

const router = express.Router();

//Gets all the providers in the database
router.get('/', providersController.getAll);

//Creates a specific provider in the database
router.post('/add',providersController.post);

//Updates a specific provider in the database
router.put('/update',providersController.put);

//Deletes a specific provider from the database
router.delete('/delete/:id',providersController.delete);

router.get('/:id', providersController.getById);

module.exports = router;