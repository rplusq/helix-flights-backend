const express = require('express');

const manufacturersController = require('../controllers/manufacturers');

const router = express.Router();

router.get('/', manufacturersController.getAll);

module.exports = router;