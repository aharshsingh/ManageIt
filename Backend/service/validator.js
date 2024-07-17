const Joi = require('joi');

const taskValidationSchema = Joi.object({
    taskName: Joi.string().required(),
    description: Joi.string().required(),
    deadline: Joi.date().iso().required(), 
    priority: Joi.string().required()
});

module.exports = { taskValidationSchema };
