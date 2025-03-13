const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const quizController = require('../controller/QuizController');

// Routes
router.post('/createQuiz',authMiddleware, adminMiddleware, quizController.createQuiz);
router.get('/getAllQuiz',authMiddleware, quizController.getAllQuiz);
router.get('/getQuizById/:id', quizController.getQuizById);
router.post('/attemptQuiz',authMiddleware, quizController.attemptQuiz);

module.exports = router

