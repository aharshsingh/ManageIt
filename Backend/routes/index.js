const express = require('express');
const router = express.Router();
const { registerController, loginController, userController, taskController, reminderController } = require('../controllers')

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/verify', loginController.verify);
router.get('/userInfo/:userId', userController.userInfo);
router.post('/addTask/:userId', taskController.addTask);
router.post('/showTask/:userId', taskController.showTask);
router.patch('/editTask/:taskId', taskController.editTask);
router.get('/showSpecificTask/:taskId', taskController.showSpecificTask);
router.get('/showTaskByPriority/:userId', taskController.showTaskByPriority);
router.get('/showCompletedTask/:userId', taskController.showCompletedTask);
router.patch('/completeTask/:taskId', taskController.completeTask);
router.delete('/deleteTask/:taskId', taskController.deleteTask);
router.post('/setReminder', reminderController.setReminder);
module.exports = router;