var express = require('express');
var app = express();

//set up configure express
require('./config/express')(app);

// set up and configure routes
require('./config/routes')(app);

// start the application
require('./config/server')(app);

module.exports = app;
