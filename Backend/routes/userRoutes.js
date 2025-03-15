const express = require("express");
const userController = require("../controller/UserController");
const { authMiddleware, adminMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

// Routes
router.get("/getAllUsers", authMiddleware,adminMiddleware, userController.getAllUsers);
router.get("/getUserById/:id", authMiddleware,adminMiddleware, userController.getUserById);
router.put("/updateUserById/:id", authMiddleware, userController.updateUser);
router.delete("/deleteUserById/:id", authMiddleware, userController.deleteUser);

module.exports = router;
