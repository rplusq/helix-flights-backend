const express = require('express');

const planeModelsController = require('../controllers/planeModels');

const router = express.Router();

//Gets all the planeModels in the database
router.get('/', planeModelsController.getAll);

//Creates a specific planeModel in the database
router.post('/add',planeModelsController.postPlaneModel);

//Creates a specific planeModel in the database
router.put('/update',planeModelsController.putPlaneModel);

//Deletes a specific planeModel from the database
router.delete('/delete/:id',planeModelsController.deletePlaneModel);

router.get('/:id', planeModelsController.getById);


module.exports = router;