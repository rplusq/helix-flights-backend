const express = require('express');

const planeTicketsController = require('../controllers/planeTickets');

const router = express.Router();

router.get('/', planeTicketsController.getAll);


//Gets all the planes in the database
router.get('/planetickets',planeTicketsController.getPlaneTickets);

//Creates a specific plane in the database
router.post('/add-planetickets',planeTicketsController.postPlaneTicket);

//Deletes a specific plane from the database
router.post('/delete-planetickets',planeTicketsController.postDeletePlaneTicket);

router.get('/id/:id', planeTicketsController.getById);


module.exports = router;