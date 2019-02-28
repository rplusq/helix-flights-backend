const express = require('express');

const crewController = require('../controllers/crew');

const router = express.Router();



//Gets all the crew in the database
router.get('/', crewController.getAll);

//Creates a specific client in the database
router.post('/add',crewController.post);

//Deletes a specific client from the database
router.put('/update',crewController.put);

//Deletes a specific client from the database
router.delete('/delete/:id',crewController.delete);

router.get('/:id', crewController.getById);

module.exports = router;