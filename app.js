'use strict'

const express         = require('express');
const path            = require('path');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const homeRoute       = require('./routes/home');
const userRoute       = require('./routes/user');
const assessRoute     = require('./routes/assessment');
const methodOverride  = require('method-override');
const session         = require('express-session');
const app             = express();
const port            = process.env.PORT || 3000;

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: "authenticate!",
  cookie: {maxAge:60000}
}));

app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')))

app.listen(port, function(){
  console.log('Server is listening on port', port);
});

//ROUTES
app.use('/', homeRoute);
app.use('/user', userRoute)
app.use('/assess', assessRoute)
