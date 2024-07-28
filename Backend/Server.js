// const express = require('express');
// const mongoose = require('mongoose');
// const { APP_PORT, DB_URL } = require('./config');
// const routes = require('./routes');
// const errorHandler = require('./middlewares/errorHandler');
// const app = express();
// const cors = require("cors");

// // Database connection
// mongoose.connect(DB_URL);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('DB connected...');
// });
// app.use(cors({
//     origin: 'http://localhost:3000',  
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], 
//     credentials: true 
//   }));
// app.use(express.json());
// app.use(routes);
// app.use(errorHandler);
// app.listen(APP_PORT, () => {
//     console.log(`Listening on ${APP_PORT}`);
// });
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

const allowedOrigins = ['http://localhost:3000', 'https://taskmanagerapps.netlify.app'];

app.use(cors({
    origin: function(origin, callback){
        // Allow requests with no origin (like mobile apps, curl, postman)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(APP_PORT, () => {
    console.log(`Listening on ${APP_PORT}`);
});
