var express = require('express');
var router = express.Router();

const Character_Category = require('../models/Character_Category');
const Character_Class = require('../models/Character_Class');
// app.use('/user', userRouter);

//router address: /user
//descriptions: User Login Page
//comments: Enterance of edit list page
router.get('/', function(req, res, next) {
  res.render('02User/login');
});

//router address: /user/dashboard
//descriptions: User Login Page
//comments: Enterance of edit list page
router.get('/dashboard', function(req, res, next) {
  res.render('02User/dashboard');
});

/* 
Character Category Function Router Start Here
*/

//router address: /user/character_category
//descriptions: Character_Category List
//comments: Demo all Character_Category Info
router.get('/character_category', (req, res, next) => {
  res.render('02User/character_category_list');
});

//router address: /user/add/character_category
//descriptions: Show Character_Category Register Form
//comments: Input Necessary Character_Category Info
router.get('/add/character_category', (req, res, next) => {
  res.render('02User/character_category_add', {
    // character_category: new Character_Category()
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
  // console.log('character_category', character_category);
  try {
    await character_category.save();
    res.redirect('/user/add/character_category');
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
//descriptions: Edit Character Category
//comments:
router.get('/edit/character_category', function(req, res, next) {
  res.render('02User/character_category_edit', {});
});

/* 
Character Class Function Router Start Here
*/

//router address: /user/character_class
//descriptions: Character_Class List
//comments: Demo all Character_Class Info
router.get('/character_class', (req, res, next) => {
  res.render('02User/character_class_list');
});

router.get('/add/character_class', (req, res, next) => {
  res.render('02User/character_class_add', {
    // character_category: new Character_Class()
  });
});

//router address: /user/add/character_class
//descriptions: Obtain New Chara_Class Info
//comments: Save Into Online MongoDB Database
router.post('/add/character_class', async (req, res, next) => {
  // console.log('req.body', req.body);
  let character_class = new Character_Class({
    Class_No: req.body.Class_No,
    Class_Name: req.body.Class_Name
  });
  // console.log('character_class', character_class);
  try {
    await character_class.save();
    res.redirect('/user/add/character_class');
  } catch (err) {
    console.log(
      'err during during post /add/character_class create new character_class ' +
        err
    );
    res.render('/user/add/character_class', {
      character_class: character_class,
      error: 'Error in Creating Character_Class'
    });
  }
});

//router address: /user/edit/character_category
//descriptions: Edit Character Category
//comments:
router.get('/edit/character_class', function(req, res, next) {
  res.render('02User/character_class_edit', {});
});

module.exports = router;
