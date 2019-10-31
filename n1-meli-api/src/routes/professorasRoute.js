const express = require('express');
const router = express.Router();
const professorasController = require('../controllers/professorasController.js');

router.get('/', professorasController.get);
router.post('/', professorasController.post);
router.get('/:id', professorasController.getById);

module.exports = router;