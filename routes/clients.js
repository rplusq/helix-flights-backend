const express = require('express');

const clientsController = require('../controllers/clients');

const router = express.Router();

router.get('/', clientsController.getAll); 

//Gets all the clients in the database
router.get('/clients',clientsController.getClients);

//Creates a specific client in the database
router.post('/add-client',clientsController.postClient)

//Deletes a specific client from the database
router.post('/delete-client',clientsController.postDeleteClient)

router.get('/id/:id', clientsController.getById)

module.exports = router;