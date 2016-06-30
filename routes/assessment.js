const router = require('express').Router();

router.get('/', function(req,res) {
  res.render('assessment/index', {user: req.session.user});
})

module.exports = router;
