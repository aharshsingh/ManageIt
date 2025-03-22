const cron = require('node-cron');
const Task = require('../models/task');
const Reminder = require('../models/reminder');
const sendReminder = require('./Reminder');
const sendTimeReminder = require('./TimeReminder');

const startCronJobs = () => {
  cron.schedule('0 6 * * *', async () => {
    try {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);

      const tasks = await Task.find({
        deadline: tomorrow,
        iscompleted: false
      });

      for (const task of tasks) {
        await sendReminder(task);
      }
      console.log('Reminder job for tasks due tomorrow executed successfully.');
    } catch (error) {
      console.error('Error executing daily reminder job:', error);
    }
  });

  cron.schedule('* * * * *', async () => {
    try {
      const nowUTC = new Date();
      const nowIST = new Date(nowUTC.getTime() + (5.5 * 60 * 60 * 1000)); 
      nowIST.setMilliseconds(0);
      const reminders = await Reminder.find({
        reminderDateTime: { $lte: nowIST },
        isSent: false,
      });
      console.log(reminders)
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
};

module.exports = startCronJobs;
