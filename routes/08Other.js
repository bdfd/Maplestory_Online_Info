var express = require('express');
var router = express.Router();

// app.use('/other', otherRouter);

//router address: /other/
//descriptions:Reference Page
//comments:Reference Page
router.get('/', function(req, res, next) {
  res.render('08Other/other', { title: 'Reference Page' });
});

module.exports = router;
