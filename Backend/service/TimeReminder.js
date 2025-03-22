const nodemailer = require('nodemailer');
const { APP_PASS, APP_EMAIL  } = require('../config/index');
const Task = require('../models/task');

const sendTimeReminder = async (reminder) => {
  let task; 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: APP_EMAIL, 
      pass: APP_PASS
    },
  });

  try {
    task = await Task.findOne({ _id : reminder.taskId})
    console.log(task)
  } catch (error) {
    console.log(error)
  }

  const mailOptions = {
    from: APP_EMAIL,
    to: reminder.email,
    subject: `Reminder for Task: "${task.taskName}"`,
    text: `
Hello,

This is a friendly reminder about your upcoming task:

Task Name: "${task.taskName}"  
Deadline: ${task.deadline.toDateString()}  

Message:  
"${reminder.message}"  

Please ensure you complete it on time. Wishing you the best of luck!

Best regards,  
Task Manager Team
`,
  };
  
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Reminder sent for task: ${task.taskName}`);
  } catch (error) {
    console.error('Error sending reminder email:', error);
  }
};

module.exports = sendTimeReminder;
