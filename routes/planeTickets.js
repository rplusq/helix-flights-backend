const express = require('express');

const TicketsController = require('../controllers/Tickets');

const router = express.Router();

//Gets all the planes in the database
router.get('/', TicketsController.getAll);

//Creates a specific plane in the database
router.post('/add',TicketsController.postTicket);

//Updates a specific plane in the database
router.put('/update',TicketsController.putTicket);

//Deletes a specific plane from the database
router.delete('/delete/:id',TicketsController.deleteTicket);

router.get('/:id', TicketsController.getById);


module.exports = router;