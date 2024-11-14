const Joi = require('joi');

const taskValidationSchema = Joi.object({
    taskName: Joi.string().required(),
    description: Joi.string().required(),
    deadline: Joi.date().iso().required(), 
    priority: Joi.string().required()
});

const reminderValidationSchema = Joi.object({
    taskId: Joi.string().required(),
    reminderDateTime: Joi.date().required(),
    message: Joi.string(),
    email: Joi.string().email().required()
})
module.exports = { taskValidationSchema, reminderValidationSchema };
