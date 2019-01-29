const express = require('express');

const planeModelsController = require('../controllers/planeModels');

const router = express.Router();

router.get('/', planeModelsController.getAll);



//Gets all the planeModels in the database
router.get('/planeModel',planeModelsController.getPlaneModels);

//Creates a specific planeModel in the database
router.post('/add-planeModel',planeModelsController.postPlaneModel);

//Deletes a specific planeModel from the database
router.post('/delete-planeModel',planeModelsController.postDeletePlaneModel);

router.get('/id/:id', planeModelsController.getById);


module.exports = router;