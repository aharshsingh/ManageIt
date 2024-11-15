const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const { registerController, loginController, userController, taskController, reminderController } = require('../controllers')

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/userInfo',auth, userController.userInfo);
router.post('/addTask/:userId',auth, taskController.addTask);
router.post('/showTask/:userId',auth, taskController.showTask);
router.patch('/editTask/:taskId',auth, taskController.editTask);
router.get('/showSpecificTask/:taskId',auth, taskController.showSpecificTask);
router.get('/showTaskByPriority/:userId',auth, taskController.showTaskByPriority);
router.get('/showCompletedTask/:userId',auth, taskController.showCompletedTask);
router.patch('/completeTask/:taskId',auth, taskController.completeTask);
router.delete('/deleteTask/:taskId',auth, taskController.deleteTask);
router.post('/setReminder',auth, reminderController.setReminder);
module.exports = router;