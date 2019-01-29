const express = require('express');

const clientsController = require('../controllers/clients');

const router = express.Router();

router.get('/', clientsController.getAll); 

//Gets all the clients in the database
router.get('/clients',clientsController.getClients);

//Creates a specific client in the database
router.post('/add-client',clientsController.postClient);

//Updates a specific client in the database
router.put('/update-client',clientsController.putClient);

//Deletes a specific client from the database
router.delete('/delete-client',clientsController.deleteClient);

router.get('/id/:id', clientsController.getById)

module.exports = router;