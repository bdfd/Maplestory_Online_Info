var express = require('express');
var router = express.Router();

// app.use('/user', userRouter);

//router address: /user
//descriptions: User Login Page
//comments: Enterance of edit list page
router.get('/', function(req, res, next) {
  res.render('02User/login', { title: 'User Login Page' });
});

module.exports = router;
