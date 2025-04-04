const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    questions: [{
        questionText: {
            type: String,
            required: true
        },
        options: {
            type: [String],  // Array of Strings
            required: true
        },
        correctAnswer: {
            type: String,
            required: true
        }
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;

