const express = require('express');

const router = express.Router()

const livroController = require('../controller/livro.controller')

router.get('/', livroController.findAll);
router.post('/', livroController.create);
router.get('/', livroController.findById);
router.put('/', livroController.update);
router.delete('/', livroController.delete);

module.exports = router