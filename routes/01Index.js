var express = require('express');
var router = express.Router();

// app.use('/', indexRouter);

//router address: /
//descriptions: Index Page
//comments: www.maplestoryinfo.tk
router.get('/', function (req, res, next) {
  res.render('01Index/index', {
    // title: 'Entrance Page',
    layout: 'page_layouts/index_layout',
  });
});

//router address: /home
//descriptions: Home Index Page
//comments: Selection Page -> select the part to view details

router.get('/home', function (req, res, next) {
  res.render('01Index/home', {
    // title: 'Entrance Page',
    layout: 'page_layouts/home_layout',
  });
});

//router address: /contact
//descriptions: Contact Page
//comments:

router.get('/contact', function (req, res, next) {
  res.render('01Index/contact');
});

//router address: /about
//descriptions: About Page
//comments:

router.get('/about', function (req, res, next) {
  res.render('01Index/about');
});

module.exports = router;
