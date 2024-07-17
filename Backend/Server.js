const express = require('express');
const mongoose = require('mongoose');
const { APP_PORT, DB_URL } = require('./config');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
const cors = require("cors");

// Database connection
mongoose.connect(DB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected...');
});
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true 
  }));
app.use(express.json());
app.use(routes);
app.use(errorHandler);
app.listen(APP_PORT, () => {
    console.log(`Listening on ${APP_PORT}`);
});
