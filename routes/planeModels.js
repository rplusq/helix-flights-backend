const express = require('express');

const planeModelsController = require('../controllers/planeModels');

const router = express.Router();

router.get('/', planeModelsController.getAll);



//Gets all the planeModels in the database
router.get('/planeModel',planeModelsController.getPlaneModels);

//Creates a specific planeModel in the database
router.post('/add-planeModel',planeModelsController.postPlaneModel);

//Creates a specific planeModel in the database
router.put('/update-planeModel',planeModelsController.putPlaneModel);

//Deletes a specific planeModel from the database
router.delete('/delete-planeModel',planeModelsController.deletePlaneModel);

router.get('/id/:id', planeModelsController.getById);


module.exports = router;