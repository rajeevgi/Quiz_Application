const express = require("express");
const router = express.Router();
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const user = new User({ name, email, password, role });

    const savedUser = await user.save();

    res
      .status(200)
      .json({ message: "User Registered Successfully..", savedUser });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ id: user._id, role: user.role },process.env.JWT_KEY,{ expiresIn: "1h" });
    // res.json({ token });
    res.status(201).json({ message: "Login Successfully..", token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Login Error, Something went wrong!" });
  }
});

module.exports = router;
