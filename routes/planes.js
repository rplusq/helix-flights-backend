const express = require('express');

const planesController = require('../controllers/planes');

const router = express.Router();

//Gets all the planes in the database
router.get('/', planesController.getAll);

//Creates a specific plane in the database
router.post('/add',planesController.postPlane);

//Creates a specific plane in the database
router.put('/update',planesController.putPlane);

//Deletes a specific plane from the database
router.delete('/delete/:id',planesController.deletePlane);

router.get('/:id', planesController.getById);


module.exports = router;