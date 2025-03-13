const express = require('express');
const router = express.Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const user =  new User({ name, email, password, role });
        await user.save();
        res.status(200).json({ message : "User Registered Successfully.."})
    } catch (error) {
        return res.status(500).json({ message : "Something went wrong!"});
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user || !bcrypt.compareSync(password, user.password)){
            return res.status(401).json({ message : "Invalid Credentials" });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_KEY, { expiresIn: '1h'});
        res.json({ token });
    } catch (error) {
        return res.status(500).json({ message : "Login Error, Something went wrong!"});
    }
});

module.exports = router;