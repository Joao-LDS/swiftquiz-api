const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const questionController = require('../controllers/question-controller');

router.get('/', questionController.listQuestion);
router.post('/', questionController.createQuestion);
router.put('/:id', questionController.updateQuestion);
router.delete('/:id', questionController.deleteQuestion);

module.exports = router;