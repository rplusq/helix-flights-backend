const express = require('express');

const providersController = require('../controllers/providers');

const router = express.Router();

router.get('/', providersController.getAll());

//Gets all the providers in the database
router.get('/providers',providersController.getProviders);

//Creates a specific provider in the database
router.post('/add-provider',providersController.postProviders);

//Deletes a specific provider from the database
router.post('/delete-provider',providersController.postDeleteProviders);

router.get('/id/:id', providersController.getById);


module.exports = router;