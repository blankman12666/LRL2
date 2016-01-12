var routePath = require('./config').routes;
var join = require('path').join;

module.exports = function(app) {
  app.use(require(join(routePath, 'pages')));
  app.use(require(join(routePath, 'teams')));

  /**
   * Error Handling
   */
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // will print stacktrace
  app.use(function(err, req, res, next) {
    if(process.env.NODE_ENV == 'development') {
      console.log(err);
    }
    res.status(err.status || 400).json({
      error: err.message,
      requested_url: req.url
    });
  });
};
