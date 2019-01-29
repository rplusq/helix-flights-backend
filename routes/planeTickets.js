const express = require('express');

const planeTicketsController = require('../controllers/planeTickets');

const router = express.Router();

router.get('/', planeTicketsController.getAll);


//Gets all the planes in the database
router.get('/planetickets',planeTicketsController.getPlaneTickets);

//Creates a specific plane in the database
router.post('/add-planetickets',planeTicketsController.postPlaneTicket);

//Creates a specific plane in the database
router.put('/add-planetickets',planeTicketsController.putPlaneTicket);

//Deletes a specific plane from the database
router.delete('/delete-planetickets',planeTicketsController.deletePlaneTicket);

router.get('/id/:id', planeTicketsController.getById);


module.exports = router;