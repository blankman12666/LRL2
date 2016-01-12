var router = require('express').Router();

router.param(':team_name', function(req, res, next, team_name) {
  req.team_name = team_name;
  next();
});

/* GET /teams/:team_name - shows team page */
router.get('/teams/:team_name', function(req, res) {
  res.render('teams/' + req.team_name);
});

module.exports = router;
