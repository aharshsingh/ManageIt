const cron = require('node-cron');
const Task = require('../models/task');
const sendReminder = require('./Reminder');
const Reminder = require('../models/reminder');
const sendTimeReminder = require('../service/TimeReminder');

cron.schedule('0 6 * * *', async () => {
  try {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const tasks = await Task.find({
      deadline: tomorrow, 
      reminderSent: false 
    });

    for (const task of tasks) {
      await sendReminder(task); 
      task.reminderSent = true;
      await task.save();
    }
    console.log('Reminder job for tasks due tomorrow executed successfully.');
  } catch (error) {
    console.error('Error executing daily reminder job:', error);
  }
});

cron.schedule('* * * * *', async () => { 
  try {
    const now = new Date();
    const reminders = await Reminder.find({
      reminderTime: { $lte: now },  
      isSent: false 
    });

    for (const reminder of reminders) {
      await sendTimeReminder(reminder);
      reminder.isSent = true;
      await reminder.save();
    }
    console.log('Reminder job executed successfully for tasks with reminderTime.');
  } catch (error) {
    console.error('Error executing reminder check job:', error);
  }
});
