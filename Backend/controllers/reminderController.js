const Reminder = require('../models/reminder');
const { reminderValidationSchema } = require('../service/validator');

const reminderController = {
    async setReminder(req,res,next){
        const { error } = reminderValidationSchema.validate(req.body);

        if (error) {
            return next(error);
        }

        const reminder = new Reminder({
            taskId: req.body.taskId,
            reminderDateTime: req.body.reminderDateTime,
            message: req.body.message,
            email: req.body.email
        })

        try {
            const result = await reminder.save();
            res.json(result);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = reminderController;