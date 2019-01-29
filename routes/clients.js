const express = require('express');

const clientsController = require('../controllers/clients');

const router = express.Router();

router.get('/', clientsController.getAll); 

//Gets all the clients in the database
router.get('/clients',clientsController.GetClients);

//Creates a specific client in the database
router.post('/add-client',clientsController.PostClient)

//Deletes a specific client from the database
router.post('/delete-client',clientsController.postDeleteClient)

module.exports = router;