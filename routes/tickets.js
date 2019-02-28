const express = require('express');

const ticketsController = require('../controllers/tickets');

const router = express.Router();

//Gets all the planes in the database
router.get('/', ticketsController.getAll);

//Creates a specific plane in the database
router.post('/add',ticketsController.post);

//Updates a specific plane in the database
router.put('/update',ticketsController.put);

//Deletes a specific plane from the database
router.delete('/delete/:id',ticketsController.delete);

router.get('/:id', ticketsController.getById);


module.exports = router;