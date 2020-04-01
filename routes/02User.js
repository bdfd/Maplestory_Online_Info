var express = require('express');
var router = express.Router();

const Character_Category = require('../models/Character_Category');
const Character_Class = require('../models/Character_Class');
const Character_Job = require('../models/Character_Job');
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
    console.log('err during get /user/character_category ' + err);
  }
});

//router address: /user/character_category/new
//descriptions: Show Character_Category Register Form
//comments: Input Necessary Character_Category Info
router.get('/character_category/new', (req, res, next) => {
  res.render('02User/character_category_add');
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
      'err during post /user/character_category/new create new character_category ' +
        err
    );
    res.render('/user/character_category', {
      character_category: character_category,
      error:
        'Error in post /user/character_category/new Creating Character_Category'
    });
  }
});

//router address: /user/character_category/:id
//descriptions: View Character Category
//comments:
router.get('/character_category/:id', async (req, res, next) => {
  try {
    let character_category = await Character_Category.findById(req.params.id);
    res.render('02User/character_category_detail', {
      character_category: character_category
    });
  } catch (err) {
    console.log('err during get /user/character_category/:id ' + err);
    res.redirect('/user');
  }
});

//router address /user/character_category/:id/edit
//descriptions: Show Detail Character Category Revise Form
//comments: Show detail information of a Character Category
router.get('/character_category/:id/edit', async (req, res, next) => {
  try {
    let character_category = await Character_Category.findById(req.params.id);
    res.render('02User/character_category_edit', {
      character_category: character_category
    });
    // console.log(character_category);
  } catch (err) {
    console.log('err during get /user/character_category/:id/edit ' + err);
    res.redirect('/user');
  }
});

//router address /user/character_category/:id/edit
//descriptions: Update Detail Character Category Information
//comments: Change detail information of Character Category
router.put('/character_category/:id/edit', async (req, res, next) => {
  let character_category;
  try {
    character_category = await Character_Category.findById(req.params.id);
    (character_category.Category_ID = req.body.Category_ID),
      (character_category.Category_Name = req.body.Category_Name),
      await character_category.save();
    res.redirect('/user/character_category');
  } catch (err) {
    if (character_category == null) {
      console.log(
        'err during put /user/character_category/:id/edit can not find this Character Category on exist database' +
          err
      );
      res.redirect('/user');
    } else {
      console.log(
        'err during put /user/character_category/:id/edit update specific character category information ' +
          err
      );
      res.redirect('/user');
    }
  }
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
    console.log('err during get /user/character_class ' + err);
  }
});

//router address: /user/character_class/new
//descriptions: Show Character_Class Register Form
//comments: Input Necessary Character_Class Info
router.get('/character_class/new', (req, res, next) => {
  res.render('02User/character_class_add');
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
    res.redirect('/user/character_class');
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

//router address: /user/character_class/:id
//descriptions: View Character Class
//comments:
router.get('/character_class/:id', async (req, res, next) => {
  try {
    let character_class = await Character_Class.findById(req.params.id);
    res.render('02User/character_class_detail', {
      character_class: character_class
    });
  } catch (err) {
    console.log('err during get /user/character_class/:id ' + err);
    res.redirect('/user');
  }
});

//router address /user/character_class/:id/edit
//descriptions: Show Detail Character Class Revise Form
//comments: Show detail information of a Character Class
router.get('/character_class/:id/edit', async (req, res, next) => {
  try {
    let character_class = await Character_Class.findById(req.params.id);
    res.render('02User/character_class_edit', {
      character_class: character_class
    });
  } catch (err) {
    console.log('err during get /user/character_class/:id/edit ' + err);
    res.redirect('/user');
  }
});

//router address /user/character_class/:id/edit
//descriptions: Update Detail Character Class Information
//comments: Change detail information of Character Class
router.put('/character_class/:id/edit', async (req, res, next) => {
  let character_class;
  try {
    character_class = await Character_Class.findById(req.params.id);
    (character_class.Class_No = req.body.Class_No),
      (character_class.Class_Name = req.body.Class_Name),
      await character_class.save();
    res.redirect('/user/character_class');
  } catch (err) {
    if (character_class == null) {
      console.log(
        'err during put /user/character_class/:id/edit can not find this Character Class on exist database' +
          err
      );
      res.redirect('/user');
    } else {
      console.log(
        'err during put /user/character_class/:id/edit update specific character class information ' +
          err
      );
      res.redirect('/user');
    }
  }
});

/* 



Character Job Function Router Start Here



*/

// router address: /user/character_job
// descriptions: Character_JobList
// comments: Demo all Character_Job Info
router.get('/character_job', async (req, res, next) => {
  try {
    let character_job = await Character_Job.find({});
    let character_class = await Character_Class.find({});
    let character_category = await Character_Category.find({});
    res.render('02User/character_job_list', {
      character_job: character_job,
      character_class: character_class,
      character_category: character_category
    });
    // console.log(character_job);
  } catch (err) {
    console.log('err during get /user/character_class ' + err);
  }
});

//router address: /user/character_job/new
//descriptions: Show Character_Job Register Form
//comments: Input Necessary Character_Jobs Info
router.get('/character_job/new', async (req, res, next) => {
  try {
    let character_classes = await Character_Class.find({});
    let character_categories = await Character_Category.find({});
    let character_job = new Character_Job();
    // console.log(categories)
    res.render('02User/character_job_add', {
      character_classes: character_classes,
      character_categories: character_categories,
      character_job: character_job
    });
  } catch (err) {
    console.log('err during get /character_job/new' + err);
    res.render('/user/dashboard');
  }
});

//router address: /user/character_job/new
//descriptions: Obtain New Chara_Job Info
//comments: Save Into Online MongoDB Database
router.post('/character_job/new', async (req, res, next) => {
  // console.log('req.body', req.body);
  let character_job = new Character_Job({
    ID: req.body.ID,
    Name: req.body.Name,
    Class: req.body.Class,
    Category: req.body.Category
  });
  // console.log('character_job', character_job);
  try {
    await character_job.save();
    res.redirect('/user/character_job/new');
  } catch (err) {
    console.log(
      'err during during post /user/character_job/new create new character_job ' +
        err
    );
    res.redirect('/user/dashboard');
  }
});

//router address: /user/character_job/:id
//descriptions: View Character job
//comments:
router.get('/character_job/:id', async (req, res, next) => {
  try {
    let character_job = await Character_Job.findById(req.params.id);
    let character_class = await Character_Class.findById(character_job.Class);
    let character_category = await Character_Category.findById(
      character_job.Category
    );
    res.render('02User/character_job_detail', {
      character_job: character_job,
      character_class: character_class,
      character_category: character_category
    });
  } catch (err) {
    console.log('err during get /user/character_class/:id ' + err);
    res.redirect('/user');
  }
});

//router address /user/character_job/:id/edit
//descriptions: Show Detail Character Job Revise Form
//comments: Show detail information of a Character Job
router.get('/character_job/:id/edit', async (req, res, next) => {
  try {
    let character_job = await Character_Job.findById(req.params.id);
    let character_classes = await Character_Class.find({});
    let character_categories = await Character_Category.find({});
    res.render('02User/character_job_edit', {
      character_job: character_job,
      character_classes: character_classes,
      character_categories: character_categories
    });
  } catch (err) {
    console.log('err during get /user/character_job/:id/edit ' + err);
    res.redirect('/user');
  }
});

//router address /user/character_job/:id/edit
//descriptions: Update Detail Character Job Information
//comments: Change detail information of Character Job
router.put('/character_job/:id/edit', async (req, res, next) => {
  let character_job;
  try {
    character_job = await Character_Job.findById(req.params.id);
    (character_job.ID = req.body.ID),
      (character_job.Name = req.body.Name),
      (character_job.Class = req.body.Class),
      (character_job.Category = req.body.Category);
    await character_job.save();
    res.redirect('/user/character_job');
  } catch (err) {
    if (character_job == null) {
      console.log(
        'err during put /user/character_job/:id/edit can not find this Character Job on exist database' +
          err
      );
      res.redirect('/user');
    } else {
      console.log(
        'err during put /user/character_class/:id/edit update specific character job information ' +
          err
      );
      res.redirect('/user');
    }
  }
  console.log(req.body);
});

/* 



Character Info Function Router Start Here

*/

//router address: /user/character_job/new
//descriptions: Show Character_Job Register Form
//comments: Input Necessary Character_Jobs Info
router.get('/character_job/new', async (req, res, next) => {
  try {
    let character_classes = await Character_Class.find({});
    let character_categories = await Character_Category.find({});
    let character_job = new Character_Job();
    // console.log(categories)
    res.render('02User/character_job_add', {
      character_classes: character_classes,
      character_categories: character_categories,
      character_job: character_job
    });
  } catch (err) {
    console.log('err during get /character_job/new' + err);
    res.render('/user/dashboard');
  }
});

module.exports = router;
