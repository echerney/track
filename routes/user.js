const router = require('express').Router();
const {createUser, loginUser} = require('../models/user');

router.get('/new', function(req, res) {
  res.render('user/new')
})

router.post('/new', createUser, loginUser, function(req, res) {
  console.log(req.body);
  req.session.user = res.user;
  req.session.save(function(err){
    if(err) throw err
    res.redirect('/');
  });
});

router.get('/login', function(req, res) {
  res.render('user/login');
})

router.post('/login', loginUser, function(req, res) {
  console.log(res.user);
  req.session.user = res.user;
  req.session.save(function(err){
    if(err) throw err
    res.redirect('/');
  });
});

router.delete('/logout', function(req,res){
  req.session.destroy(function(err){
    res.redirect('/')
  })
})


module.exports = router;
