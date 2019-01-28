const express = require('express');

const clientsController = require('../controllers/clients');

const router = express.Router();

router.get('/', clientsController.getAll);

router.get('/id/:id', clientsController.getById)

module.exports = router;