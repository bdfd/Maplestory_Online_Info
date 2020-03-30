var express = require('express');
var router = express.Router();

// app.use('/character', charRouter);

//router address:/character/
//descriptions:Character List Page
//comments:Character List page
router.get('/', function(req, res, next) {
  res.render('03Character/chara_list', { title: 'Character List Page' });
});

//router address: /detail
//descriptions:Character Detail page
//comments:Character Detail page
router.get('/detail', function(req, res, next) {
  res.render('03Character/chara_detail', { title: 'Character Detail Page' });
});

module.exports = router;
