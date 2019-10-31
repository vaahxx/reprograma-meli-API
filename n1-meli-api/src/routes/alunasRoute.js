const express = require('express');
const router = express.Router();
const alunasController = require('../controllers/alunasController');

router.get('/', alunasController.get);
router.post('/', alunasController.post);
router.get('/nasceuEmSp', alunasController.getSp);
router.get('/:id', alunasController.getById);
router.get('/:id/getIdade', alunasController.getIdade);
router.get('/:id/books', alunasController.getBooks);
// router.post('/:id/books', alunasController.postBooks);

module.exports = router;