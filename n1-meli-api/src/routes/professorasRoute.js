const express = require('express');
const router = express.Router();
const professorasController = require('../controllers/professorasController.js');

router.get('/', professorasController.get);

module.exports = router;