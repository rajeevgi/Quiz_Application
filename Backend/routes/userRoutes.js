const express = require('express');
const userController = require('../controller/UserController');
const router =  express.Router();

// Routes
router.get('/getAllUsers', userController.getAllUsers);
router.get('/getUserById/:id', userController.getUserById);
router.put('/updateUserById/:id', userController.updateUser);
router.delete('/deleteUserById/:id', userController.deleteUser);

module.exports = router;