const nodemailer = require('nodemailer');

const sendTimeReminder = async (reminder) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: reminder.userId,
    subject: `Reminder for Task: "${task.taskName}"`,
    text: `Hello! This is a reminder for your task "${task.taskName}", which is due on ${task.deadline.toDateString()}.
    Message: "${reminder.message}"
    Please ensure you complete it on time. Best of luck!`,
  };
  
  
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Reminder sent for task: ${task.taskName}`);
  } catch (error) {
    console.error('Error sending reminder email:', error);
  }
};

exports.module = sendTimeReminder;