var express = require('express');
var router = express.Router();

// app.use('/note', trianingRouter);

//router address: /note/
//descriptions:Article Index Page
//comments:Article Index Page
router.get('/', function(req, res, next) {
  res.render('07Training_Article/article_list', {
    title: 'Article Index Page'
  });
});

//router address: /note/01
//descriptions:Article 01 Page
//comments:Article 01 Page
router.get('/', function(req, res, next) {
  res.render('07Training_Article/01_fast_level_training', {
    title: 'Article 01 Page'
  });
});

module.exports = router;
