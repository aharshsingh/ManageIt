const nodemailer = require('nodemailer');
const { APP_PASS } = require('../config/index');
const { APP_EMAIL } = require('../config/index');
const sendReminder = async (task) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: APP_EMAIL, 
      pass: APP_PASS, 
    },
  });
 let res;
  try {
    res = await User.findOne({ _id : task.userId });
  } catch (error) {
    console.log(error);
  }
  const mailOptions = {
    from: APP_EMAIL,
    to: res.email,
    subject: `Reminder: Task "${task.taskName}" Due Tomorrow`,
    text:  `
    Hello,
    
    This is a reminder that your task "${task.taskName}" is due tomorrow:  
    Deadline: ${task.deadline.toDateString()}  
    
    Please ensure it is completed by the deadline.
    
    Best regards,  
    Task Manager Team
    `
  };
  
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Reminder sent for task: ${task.taskName}`);
  } catch (error) {
    console.error('Error sending reminder email:', error);
  }
};

exports.module = sendReminder;