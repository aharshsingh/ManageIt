const Task = require('../models/task');
const { taskValidationSchema } = require('../service/validator');
const CustomErrorHandler = require('../customErrorHandler/customErrorHandler');

const taskController = {
    async addTask(req,res,next){
        const { error } = taskValidationSchema.validate(req.body);
        if (error) {
            return next(error);
        }
        
        const task = new Task({
            taskName: req.body.taskName,
            description: req.body.description,
            deadline: req.body.deadline,
            priority: req.body.priority,
            userId: req.params.userId
        })

        try {
            const result = await task.save();
            res.json(result);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = taskController;