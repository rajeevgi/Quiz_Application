const user = require("../model/User");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    if (!users) {
      return res.status(404).json({ message: "Users not found!" });
    }
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await user.findById(id);

    if (!getUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(201).json({ message: "User Found.", getUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    res
      .status(201)
      .json({ messge: "User Updated Successfully...", updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await user.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    res
      .status(201)
      .json({ message: "User Deleted Successfully..", deletedUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

