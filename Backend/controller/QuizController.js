const Quiz = require("../model/Quiz");
const User = require("../model/User");

exports.createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz({ ...req.body, createdBy: req.user.id });
    await quiz.save();
    res.json({ message: "Quiz Created Successfully...", quiz });
  } catch (error) {
    return res.status(500).json({ message: "Error Creating Quiz!" });
  }
};

exports.getAllQuiz = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving quizzes!" });
  }
};

exports.getQuizById = async (req, res) => {
  try {
    const { id } = req.params;
    const getQuiz = await Quiz.findById(id);
    if (!getQuiz) {
      return res.status(404).json({ message: "Quiz not found!" });
    }
    res.json({ message: "Quiz Found Successfully...", getQuiz });
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving quiz!" });
  }
};

exports.attemptQuiz = async (req, res) => {
  try {
    const { quizId, answers } = req.body;
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found!" });
    }
    let score = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) score++;
    });

    await User.findByIdAndUpdate(req.user.id, {
      $push: { scores: { quizId, score } },
    });

    res.json({ message: "Quiz attempted successfully", score });
  } catch (error) {
    res.status(500).json({ message: "Error attempting quiz" });
  }
};
