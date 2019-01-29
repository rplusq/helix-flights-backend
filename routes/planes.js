const express = require('express');

const planesController = require('../controllers/planes');

const router = express.Router();

router.get('/', planesController.getAll);


//Gets all the planes in the database
router.get('/plane',planesController.getPlanes);

//Creates a specific plane in the database
router.post('/add-plane',planesController.postPlane);

//Creates a specific plane in the database
router.put('/update-plane',planesController.putPlane);

//Deletes a specific plane from the database
router.delete('/delete-plane',planesController.deletePlane);

router.get('/id/:id', planesController.getById);


module.exports = router;