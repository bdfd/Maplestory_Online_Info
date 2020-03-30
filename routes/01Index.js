var express = require('express');
var router = express.Router();

// app.use('/', indexRouter);

//router address: /
//descriptions: Index Page
//comments: www.maplestoryinfo.tk
router.get('/', function(req, res, next) {
  res.render('01Index/index', {
    // title: 'Home Page',
    layout: 'page_layouts/01Index_Login_Layout'
  });
});

//router address: /home
//descriptions: Home Page
//comments:enter selection list page
router.get('/home', function(req, res, next) {
  res.render('01Index/home', { title: 'Home Page' });
});

module.exports = router;
