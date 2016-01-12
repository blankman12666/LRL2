var express = require('express');
var path = require('path');
var root = require('./config').root;
var logger = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.set('views', path.join(root, 'views'));
  app.set('view engine', 'jade');

  // uncomment after placing favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  // Use morgan to log requests to the console on development
  if(process.env.NODE_ENV == 'development') {
    app.use(logger('dev'));
  }

  // Body and cookie parsing middleware
  app.use(bodyParser.urlencoded({extended: true}));
  app.use('/static', express.static(path.join(root, 'public')));
  app.use('/bower_components', express.static(path.join(root, 'bower_components')));
};
