const express = require('express');

const crewController = require('../controllers/crew');

const router = express.Router();



//Gets all the crew in the database
router.get('/', crewController.getAll);

//Creates a specific client in the database
router.post('/add',crewController.postCrew);

//Deletes a specific client from the database
router.put('/update',crewController.putCrew);

//Deletes a specific client from the database
router.delete('/delete/:id',crewController.deleteCrew);

router.get('/id/:id', crewController.getById);

module.exports = router;