const express = require('express');
const app = express();
const cors = require('cors')


/**
* SETTINGS
*/
console.log(process.env.MONGOD_URI)
app.set('port', process.env.PORT || 4000);

/*
* MIDDLEWARES
*/
app.use(cors())
app.use(express.json())

/**
* ROUTES
*/
app.use('/api/users',require('./routes/users'));
app.use('/api/notes',require('./routes/notes'));

module.exports = app;