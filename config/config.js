var path = require('path');
var extend = require('util')._extend;
var fs = require('fs');

// default config values
var defaults = {
  root: root = path.join(__dirname, '..'),
  controllers: path.join(root, 'controllers'),
  routes: path.join(root, 'routes')
};

var development = require('./env/development');
var production = require('./env/production');

module.exports = {
  development: extend(development, defaults),
  production: extend(production, defaults)
}[process.env.NODE_ENV || 'development'];
