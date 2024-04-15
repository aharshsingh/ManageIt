const express = require('express');
const app = express();
const { APP_PORT } = require('./config');
const routes = require('./routes')

app.use(express.json())
app.use(routes)

app.listen(APP_PORT, ()=>{
    console.log(`Server is running on ${APP_PORT}`);
});