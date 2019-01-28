const express = require('express');

const clientsController = require('../controllers/clients');

const router = express.Router();

router.get('/', clientsController.getAll);      

module.exports = router;