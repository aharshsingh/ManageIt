const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    APP_PORT : process.env.APP_PORT,
    APP_URL : process.env.APP_URL,
    JWT_SECRET : process.env.JWT_SECRET,
    DB_URL : process.env.DB_URL,
    EMAIL_USER : process.env.EMAIL_USER,
    APP_PASS : process.env.APP_PASS,
    APP_EMAIL : process.env.APP_EMAIL
}