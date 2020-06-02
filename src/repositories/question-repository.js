const mongoose = require('mongoose');
const Question = mongoose.model('Question');

exports.listQuestion = async () => {
    // o segundo parametro, 'String', faz retornar apenas os valores dessas chaves, -_id n retorna o param id
  const res = await Question.find({}, 'question correctAnswer options');
  return res;
};

exports.createQuestion = async data => {
  const question = new Question(data);
  await question.save();
};

exports.updateQuestion = async (id, data) => {
    await Question.findByIdAndUpdate(id, {
      $set: data // diretiva que diz ao DB o que deve ser autalizado
    });
};

exports.deleteQuestion = async id => {
    await Question.findByIdAndDelete(id);
}