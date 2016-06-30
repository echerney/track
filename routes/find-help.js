const router = require('express').Router();
const {getFacilityData} = require('../models/find-help')

router.get('/', function(req,res) {
  res.render('find-help/index', {user: req.session.user});
})

router.get('/search', getFacilityData, function(req,res) {
  console.log(res.facilityList);
  res.send(res.facilityList);
})

module.exports = router;
