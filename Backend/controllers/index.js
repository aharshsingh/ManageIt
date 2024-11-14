const registerController = require('./auth/reigsterController');
const loginController = require('./auth/loginController');
const userController = require('./userController');
const taskController = require('./taskController');
const reminderController = require('./reminderController');
module.exports = { registerController, loginController, userController, taskController, reminderController };