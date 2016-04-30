var router = require('express').Router();

/* GET / - home page */
router.get('/', function(req, res) {
  res.render('index');
});

/* GET /teams - list teams */
router.get('/teams', function(req, res) {
  res.render('teams');
});

/* GET /standings - show team standings */
router.get('/standings', function(req, res) {
  res.render('standings');
});

/* GET /matches - show league matches */
router.get('/matches', function(req, res) {
  res.render('matches');
});

/* GET /join - show join info */
router.get('/join', function(req, res) {
  res.render('join');
});

/* GET /about - show about */
router.get('/about', function(req, res) {
  res.render('about');
});

/* GET /rules - show rules */
router.get('/rules', function(req, res) {
  res.render('rules');
});

/* GET /demos - show demos */
router.get('/demos', function(req, res) {
  res.render('demos');
});

module.exports = router;
