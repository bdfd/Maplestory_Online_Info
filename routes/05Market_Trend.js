var express = require('express');
var router = express.Router();

// app.use('/market', marketRouter);

//router address: /market/
//descriptions:Market Index Page
//comments:Market Index Page
router.get('/', function(req, res, next) {
  res.render('05Market_Trend/market', { title: 'Market Index Page' });
});

//router address: /market/item_list
//descriptions:Popular Item List Page
//comments:Popular Item List Page
router.get('/list', function(req, res, next) {
  res.render('05Market_Trend/popular_item', {
    title: 'Popular Item List Page'
  });
});

module.exports = router;
