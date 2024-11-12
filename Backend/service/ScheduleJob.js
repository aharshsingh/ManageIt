const cron = require('node-cron');
const Task = require('../models/task');
const sendReminder = require('./Remainder'); 

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
    console.log('Reminder job executed successfully.');
  } catch (error) {
    console.error('Error executing reminder job:', error);
  }
});
