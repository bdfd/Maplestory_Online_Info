var express = require('express');
var router = express.Router();

const Character_Category = require('../models/Character_Category');

// app.use('/user', userRouter);

//router address: /user
//descriptions: User Login Page
//comments: Enterance of edit list page
router.get('/', function(req, res, next) {
  res.render('02User/login', { title: 'User Login Page' });
});

//router address: /user/add/character_category
//descriptions: Show Character_Category Register Form
//comments: Input Necessary Character_Category Info
router.get('/add/character_category', (req, res, next) => {
  res.render('02User/add_character_category', {
    character_category: new Character_Category()
  });
});

//router address: /user/add/character_category
//descriptions: Obtain New Chara_Category Info
//comments: Save Into Online MongoDB Database
router.post('/add/character_category', async (req, res, next) => {
  // console.log('req.body', req.body)
  let character_category = new Character_Category({
    Category_ID: req.body.Category_ID,
    Category_Name: req.body.Category_Name
  });
  try {
    await character_category.save();
    res.redirect('/user');
  } catch (err) {
    console.log(
      'err during during post /add/character_category create new character_category ' +
        err
    );
    res.render('/user/add/character_category', {
      character_category: character_category,
      error: 'Error in Creating Character_Category'
    });
  }
});

//router address: /user/edit/character_category
//descriptions: edit character category
//comments:
router.get('/edit/character_category', function(req, res, next) {
  res.render('02User/edit_character_category', {
    title: 'Edit Char Category Page'
  });
});

module.exports = router;
