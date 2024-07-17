const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: { type: String, required: true },
    description: { type: String, required: true },
    deadline: { type: Date, required: true },
    priority: {type: String, required: true},
    userId: {type: String, required: true}
}, { timestamps: true});

module.exports = mongoose.model('Task', taskSchema, 'tasks');