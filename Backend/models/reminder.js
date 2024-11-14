const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reminderSchema = new Schema({
    taskId: { type: String, required: true }, 
    message: { type: String, required: true },
    reminderDateTime: { type: Date, required: true },
    email: { type: String, required: true },
    isSent: { type: Boolean, default: false } 
}, { timestamps: true });

module.exports = mongoose.model('Reminder', reminderSchema, 'reminders');
