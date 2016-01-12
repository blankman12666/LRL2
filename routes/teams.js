var router = require('express').Router();

/* GET /teams/:team_name - shows team page */
router.get('/teams/:team_name', function(req, res) {
  res.render('teams/' + team_name);
});
