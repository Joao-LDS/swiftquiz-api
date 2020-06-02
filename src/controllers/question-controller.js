const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const { validationResult } = require('express-validator');
const repository = require('../repositories/question-repository')

// list
exports.listQuestion = async (req, res) => {
    try {
        const data = await repository.listQuestion();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({message: 'Failed to load questions'});
    }
};

// create
exports.createQuestion = async (req, res) => {
    try {
        await repository.createQuestion([{
        question: req.body.question,
        correctAnswer: req.body.correctAnswer,
        options: req.body.options
        }]);
        res.status(201).send({message: 'Question registered successfully.'});
    } catch (e) {
        res.status(500).send({message: 'Failed to register question.'});
    }
};

// update
exports.updateQuestion = async (req, res) => { 
    try {
      await repository.updateQuestion(req.params.id, req.body);
      res.status(200).send({
        message: 'Question updated successfully.'
      });
    } catch (e) {
      res.status(500).send({message: 'Failed to update question.'});
    }
};

// delete
exports.deleteQuestion = async (req, res) => {
    try {
      await repository.deleteQuestion(req.params.id);
      res.status(200).send({
        message: 'Question removed successfully'
      });
    } catch (e) {
      res.status(500).send({message: 'Failed to remove question.'});
    }
  };