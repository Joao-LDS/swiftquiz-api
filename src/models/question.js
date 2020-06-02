const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  question: {
    type: String,
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  },
  options: {
      type: [String],
      required: true
  }
});

module.exports = mongoose.model('Question', schema);