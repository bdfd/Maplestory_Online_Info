var express = require('express');
var router = express.Router();

// app.use('/equipment', equipRouter);

//router address: /equipment/
//descriptions:Equipment List page
//comments:Equipment List Page
router.get('/', function(req, res, next) {
  res.render('04Equipment/equip_info', { title: 'Equipment List Page' });
});

module.exports = router;
