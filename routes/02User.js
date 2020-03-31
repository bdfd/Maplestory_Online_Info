var express = require('express');
var router = express.Router();

const Character_Category = require('../models/Character_Category');
const Character_Class = require('../models/Character_Class');
// app.use('/user', userRouter);

//router address: /user
//descriptions: User Login Page
//comments: Enterance of edit list page
router.get('/', (req, res, next) => {
  res.render('02User/login');
});

//router address: /user/dashboard
//descriptions: User Login Page
//comments: Enterance of edit list page
router.get('/dashboard', (req, res, next) => {
  res.render('02User/dashboard');
});

/* 
Character Category Function Router Start Here
*/

//router address: /user/character_category
//descriptions: Character_Category List
//comments: Demo all Character_Category Info
router.get('/character_category', async (req, res, next) => {
  try {
    let character_category = await Character_Category.find({});
    res.render('02User/character_category_list', {
      character_category: character_category
    });
    // console.log(character_category);
  } catch (err) {
    console.log('err during during /user/character_category ' + err);
  }
});

//router address: /user/character_category/new
//descriptions: Show Character_Category Register Form
//comments: Input Necessary Character_Category Info
router.get('/character_category/new', (req, res, next) => {
  res.render('02User/character_category_add', {
    // character_category: new Character_Category()
  });
});

//router address: /user/character_category/new
//descriptions: Obtain New Chara_Category Info
//comments: Save Into Online MongoDB Database
router.post('/character_category/new', async (req, res, next) => {
  // console.log('req.body', req.body)
  let character_category = new Character_Category({
    Category_ID: req.body.Category_ID,
    Category_Name: req.body.Category_Name
  });
  // console.log('character_category', character_category);
  try {
    await character_category.save();
    res.redirect('/user/character_category/new');
  } catch (err) {
    console.log(
      'err during during post /user/character_category/new create new character_category ' +
        err
    );
    res.render('/user/character_category/new', {
      character_category: character_category,
      error:
        'Error in post /user/character_category/new Creating Character_Category'
    });
  }
});

//router address: /user/character_category/:id
//descriptions: Edit Character Category
//comments:
router.get('/character_category/:id', (req, res, next) => {
  res.render('02User/character_category_edit', {});
});

/* 
Character Class Function Router Start Here
*/

//router address: /user/character_class
//descriptions: Character_Class List
//comments: Demo all Character_Class Info
router.get('/character_class', async (req, res, next) => {
  try {
    let character_class = await Character_Class.find({});
    res.render('02User/character_class_list', {
      character_class: character_class
    });
    // console.log(character_class);
  } catch (err) {
    console.log('err during during /user/character_category ' + err);
  }
});

router.get('/character_class/new', (req, res, next) => {
  res.render('02User/character_class_add', {
    // character_category: new Character_Class()
  });
});

//router address: /user/character_class/new
//descriptions: Obtain New Chara_Class Info
//comments: Save Into Online MongoDB Database
router.post('/character_class/new', async (req, res, next) => {
  // console.log('req.body', req.body);
  let character_class = new Character_Class({
    Class_No: req.body.Class_No,
    Class_Name: req.body.Class_Name
  });
  // console.log('character_class', character_class);
  try {
    await character_class.save();
    res.redirect('/user/character_class/new');
  } catch (err) {
    console.log(
      'err during during post /user/character_class/new create new character_class ' +
        err
    );
    res.render('/user/character_class/new', {
      character_class: character_class,
      error: 'Error in post /user/character_class/new Creating Character_Class'
    });
  }
});

//router address: /user/edit/character_category
//descriptions: Edit Character Category
//comments:
router.get('/edit/character_class', (req, res, next) => {
  res.render('02User/character_class_edit', {});
});

module.exports = router;
