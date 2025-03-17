const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./config/database');
const dotenv = require('dotenv');
dotenv.config();

// Middleware
const app = express();
app.use(cors({
    origin :'http://localhost:4200',
    credentials : true
}));
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/Auth');
app.use('/api/auth', authRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

const quizRoutes = require('./routes/quizRoutes');
app.use('/api/quiz', quizRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})