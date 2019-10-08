const express = require('express');
const router = express.Router();
const alunasController = require('../controllers/alunasController');

router.get('/', alunasController.get);
router.get('/:id', alunasController.getById);

module.exports = router;