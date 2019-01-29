const express = require('express');

const planesController = require('../controllers/planes');

const router = express.Router();

router.get('/', planesController.getAll);


//Gets all the planes in the database
router.get('/plane',planesController.getPlanes);

//Creates a specific plane in the database
router.post('/add-plane',planesController.postPlane);

//Deletes a specific plane from the database
router.post('/delete-plane',planesController.postDeletePlane);

router.get('/id/:id', planesController.getById);


module.exports = router;