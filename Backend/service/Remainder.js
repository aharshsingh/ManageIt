const nodemailer = require('nodemailer');

const sendReminder = async (task) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: task.userId,
    subject: `Reminder: Task "${task.taskName}" Due Tomorrow`,
    text: `Hello! This is a reminder that the task "${task.taskName}" is due tomorrow (${task.deadline.toDateString()}). Please make sure it's completed by then.`,
  };
  
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Reminder sent for task: ${task.taskName}`);
  } catch (error) {
    console.error('Error sending reminder email:', error);
  }
};
