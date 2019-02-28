const express = require('express');

const planeModelsController = require('../controllers/planeModels');

const router = express.Router();

//Gets all the planeModels in the database
router.get('/', planeModelsController.getAll);

//Creates a specific planeModel in the database
router.post('/add',planeModelsController.post);

//Creates a specific planeModel in the database
router.put('/update',planeModelsController.put);

//Deletes a specific planeModel from the database
router.delete('/delete/:id',planeModelsController.delete);

router.get('/:id', planeModelsController.getById);


module.exports = router;