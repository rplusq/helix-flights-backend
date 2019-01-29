const express = require('express');

const crewController = require('../controllers/crew');

const router = express.Router();

router.get('/', crewController.getAll);


//Gets all the crew in the database
router.get('/crew',crewController.getCrew);

//Creates a specific client in the database
router.post('/add-crew',crewController.postCrew)

//Deletes a specific client from the database
router.post('/delete-crew',crewController.postDeleteCrew)

router.get('/id/:id', crewController.getById)

module.exports = router;