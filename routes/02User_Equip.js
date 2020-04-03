var express = require('express');
var router = express.Router();

// app.use('/user/equipment', userEquipRouter);

//router address: /user/equipment/
//descriptions: User Equipment List page
//comments:Equipment List Page
router.get('/', function(req, res, next) {
  res.render('02User_Equip/test');
});

module.exports = router;
