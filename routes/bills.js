const express = require('express');

const billsController = require('../controllers/bills');

const router = express.Router();

//Gets all the flight tickets in the database
router.get('/', billsController.getAll);

//Creates a specific flight tickets in the database
router.post('/add',billsController.post);

//Creates a specific flight tickets in the database
router.put('/update',billsController.put);

//Deletes a specific flight tickets from the database
router.delete('/delete/:id',billsController.delete);

router.get('/:id', billsController.getById);

module.exports = router;