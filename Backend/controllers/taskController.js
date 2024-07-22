const Task = require('../models/task');
const { taskValidationSchema } = require('../service/validator');
const CustomErrorHandler = require('../customErrorHandler/customErrorHandler');
const dayjs = require('dayjs');

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
    },
    
    async showTask(req, res, next) {
    const userId = req.params.userId;
    const date = req.body.date;
    const formattedDate = dayjs(date).format('YYYY-MM-DD');

    try {
        const tasks = await Task.find({ userId: userId });
        const result = tasks.filter(task => {
            const deadline = dayjs(task.deadline).format('YYYY-MM-DD');
            return formattedDate === deadline;
        });

        console.log(result);
        res.json(result);
    } catch (error) {
        next(error); 
        }
    },

    async editTask(req, res, next) {
        let formattedDate;
        const id = req.params.taskId;
        const { taskName, description, date, priority } = req.body;
    
        if (date !== undefined) {
            formattedDate = dayjs(date).format('YYYY-MM-DD');
        }
    
        const update = {};
        if (taskName !== undefined) update.taskName = taskName;
        if (description !== undefined) update.description = description;
        if (formattedDate !== undefined) update.deadline = formattedDate; 
        if (priority !== undefined) update.priority = priority;

        try {
            const result = await Task.findByIdAndUpdate(
                id,
                { $set: update },
                { new: true }
            );
    
            if (!result) {
                return res.json({ message: 'Task not found' });
            }
    
            return res.json(result);
        } catch (error) {
            return next(error);
        }
    },

    async showSpecificTask(req,res,next){
        let result;
        try {
            result = await Task.findOne({ _id : req.params.taskId})
            if(!result){
                return res.json({ message: 'Task not found' });
            }
            res.json(result);
        } catch (error) {
            return next(error);
        }
    }

}

module.exports = taskController;