const express = require('express');

const clientsController = require('../controllers/clients');

const router = express.Router();

//Gets all the clients in the database
router.get('/', clientsController.getAll); 

//Creates a specific client in the database
router.post('/add',clientsController.post);

//Updates a specific client in the database
router.put('/update',clientsController.put);

//Deletes a specific client from the database
router.delete('/delete/:id',clientsController.delete);

router.get('/:id', clientsController.getById)

module.exports = router;