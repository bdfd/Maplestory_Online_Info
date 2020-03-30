var express = require('express');
var router = express.Router();

// app.use('/pet', petRouter);

//router address: /pet/
//descriptions:Pet Index Page
//comments:Pet Index Page
router.get('/', function(req, res, next) {
  res.render('06Pet/pet_list', { title: 'Pet Index Page' });
});

module.exports = router;
