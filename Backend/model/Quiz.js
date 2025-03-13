const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    questions : [{
        questionText : String,
        options : String,
        correctAnswer : String
    }],

    createdBy : {
        type : mongoose.Schema.Types.ObjectId, ref : 'User'
    }
});

const quiz = mongoose.model('Quiz', quizSchema);
module.exports = quiz;