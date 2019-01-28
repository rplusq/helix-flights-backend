const express = require('express');

const planesController = require('../controllers/planes');

const router = express.Router();

router.get('/', planesController.getAll);

module.exports = router;