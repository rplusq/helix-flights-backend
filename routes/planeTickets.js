const express = require('express');

const planeTicketsController = require('../controllers/planeTickets');

const router = express.Router();

//Gets all the planes in the database
router.get('/', planeTicketsController.getAll);

//Creates a specific plane in the database
router.post('/add',planeTicketsController.postPlaneTicket);

//Updates a specific plane in the database
router.put('/update',planeTicketsController.putPlaneTicket);

//Deletes a specific plane from the database
router.delete('/delete/:id',planeTicketsController.deletePlaneTicket);

router.get('/:id', planeTicketsController.getById);


module.exports = router;