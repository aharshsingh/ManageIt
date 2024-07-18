const express = require('express');
const router = express.Router();
const { registerController, loginController, userController, taskController } = require('../controllers')

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/verify', loginController.verify);
router.get('/userInfo/:userId', userController.userInfo);
router.post('/addTask/:userId', taskController.addTask);
router.get('/showTask/:userId', taskController.showTask);
module.exports = router;