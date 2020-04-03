var express = require('express');
var router = express.Router();

const Character_Category = require('../models/Character_Category');
const Character_Class = require('../models/Character_Class');
const Character_Job = require('../models/Character_Job');
const Character_Professional_Skill = require('../models/Character_Professional_Skill');
const Character_Info = require('../models/Character_Info');
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
    let class_default = await Character_Class.findById(character_job.Class);
    let category_default = await Character_Category.findById(
      character_job.Category
    );

    res.render('02User/character_job_edit', {
      character_job: character_job,
      character_classes: character_classes,
      character_categories: character_categories,
      class_default: class_default,
      category_default: category_default
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
  // console.log(req.body);
});

/* 



Character Professional Skill Function Router Start Here

*/

//router address: /user/character_professional_skill
//descriptions: Character_Professional_Skill List
//comments: Demo all Character_Professional_Skill Info
router.get('/character_professional_skill', async (req, res, next) => {
  try {
    let character_professional_skill = await Character_Professional_Skill.find(
      {}
    );
    res.render('02User/character_professional_skill_list', {
      character_professional_skill: character_professional_skill
    });
    // console.log(character_professional_skill);
  } catch (err) {
    console.log('err during get /user/character_professional_skill ' + err);
  }
});

//router address: /user/character_profession_skill/new
//descriptions: Show Character_Profession_Skill Register Form
//comments: Input Necessary Character_Professional_Skill
router.get('/character_professional_skill/new', async (req, res, next) => {
  try {
    let character_professional_skill = new Character_Professional_Skill();
    res.render('02User/character_professional_skill_add', {
      character_professional_skill: character_professional_skill
    });
  } catch (err) {
    console.log('err during get /character_professional_skill/new' + err);
    res.render('/user/dashboard');
  }
});

//router address: /user/character_professional_skill/new
//descriptions: Obtain New Chara_Professional_Skill
//comments: Save Into Online MongoDB Database
router.post('/character_professional_skill/new', async (req, res, next) => {
  // console.log('req.body', req.body);
  let character_professional_skill = new Character_Professional_Skill({
    ID: req.body.ID,
    Type: req.body.Type,
    Level: req.body.Level
  });
  // console.log('character_info', character_info);
  try {
    await character_professional_skill.save();
    res.redirect('/user/character_professional_skill/new');
  } catch (err) {
    console.log(
      'err during during post /user/character_info/new create new character information ' +
        err
    );
    res.redirect('/user/dashboard');
  }
});

//router address: /user/character_profession_skill/:id
//descriptions: View Character Professional Skill
//comments:
router.get('/character_professional_skill/:id', async (req, res, next) => {
  try {
    let character_professional_skill = await Character_Professional_Skill.findById(
      req.params.id
    );
    res.render('02User/character_professional_skill_detail', {
      character_professional_skill: character_professional_skill
    });
    console.log(character_professional_skill);
  } catch (err) {
    console.log('err during get /user/character_professional_skill/:id ' + err);
    res.redirect('/user');
  }
});

// router address /user/character_professional_skill/:id/edit
// descriptions: Show Detail Character Professional Skill Revise Form
// comments: Show detail information of a Character Professional Skill
router.get('/character_professional_skill/:id/edit', async (req, res, next) => {
  try {
    let character_professional_skill = await Character_Professional_Skill.findById(
      req.params.id
    );
    res.render('02User/character_professional_skill_edit', {
      character_professional_skill: character_professional_skill
    });
    // console.log(character_category);
  } catch (err) {
    console.log(
      'err during get /user/character_professional_skill/:id/edit ' + err
    );
    res.redirect('/user');
  }
});

//router address /user/character_professional_skill/:id/edit
//descriptions: Update Detail Character Professional Skill Information
//comments: Change detail information of Character Professional Skill
router.put('/character_professional_skill/:id/edit', async (req, res, next) => {
  let character_professional_skill;
  try {
    character_professional_skill = await Character_Professional_Skill.findById(
      req.params.id
    );
    (character_professional_skill.ID = req.body.ID),
      (character_professional_skill.Type = req.body.Type),
      (character_professional_skill.Level = req.body.Level),
      await character_professional_skill.save();
    res.redirect('/user/character_professional_skill');
  } catch (err) {
    if (character_professional_skill == null) {
      console.log(
        'err during put /user/character_professional_skill/:id/edit can not find this Character Category on exist database' +
          err
      );
      res.redirect('/user');
    } else {
      console.log(
        'err during put /user/character_professional_skill/:id/edit update specific character category information ' +
          err
      );
      res.redirect('/user');
    }
  }
});

/* 



Character Info Function Router Start Here

*/

router.get('/character_info', async (req, res, next) => {
  try {
    let character_info = await Character_Info.find({});
    let character_job = await Character_Job.find({});
    let character_class = await Character_Class.find({});
    let character_category = await Character_Category.find({});
    let character_professional_skill = await Character_Professional_Skill.find(
      {}
    );
    res.render('02User/character_info_list', {
      character_info: character_info,
      character_job: character_job,
      character_class: character_class,
      character_category: character_category,
      character_professional_skill: character_professional_skill
    });
    // console.log(character_info);
  } catch (err) {
    console.log('err during get /user/character_info ' + err);
    res.render('/user/dashboard');
  }
});

//router address: /user/character_info/new
//descriptions: Show Character_info Register Form
//comments: Input Necessary Character_Info
router.get('/character_info/new', async (req, res, next) => {
  try {
    let character_jobs = await Character_Job.find({});
    let character_professional_skills = await Character_Professional_Skill.find(
      {}
    );
    let character_info = new Character_Info();
    res.render('02User/character_info_add', {
      character_jobs: character_jobs,
      character_professional_skills: character_professional_skills,
      info: character_info
    });
  } catch (err) {
    console.log('err during get /character_info/new' + err);
    res.render('/user/dashboard');
  }
});

//router address: /user/character_info/new
//descriptions: Obtain New Chara_Info
//comments: Save Into Online MongoDB Database
router.post('/character_info/new', async (req, res, next) => {
  // console.log('req.body', req.body);
  let character_info = new Character_Info({
    ID: req.body.ID,
    Name: req.body.Name,
    Level: req.body.Level,
    Job: req.body.Job,
    Target_Usage: req.body.Target_Usage,
    Professional_Skill_1: req.body.Professional_Skill_1,
    Professional_Skill_2: req.body.Professional_Skill_2,
    Professional_Skill_3: req.body.Professional_Skill_3,
    Professional_Skill_4: req.body.Professional_Skill_4,
    Location: req.body.Location,
    Equip_Slot: req.body.Equipment_Slot,
    Use_Slot: req.body.Use_Slot,
    Etc_Slot: req.body.Etc_Slot,
    Setup_Slot: req.body.Setup_Slot,
    Tradable_Item: req.body.Tradable_Item,
    Movable_Item: req.body.Movable_Item,
    Untradable_Item: req.body.Untradable_Item,
    Special_Note: req.body.Special_Note
  });
  // console.log('character_info', character_info);
  try {
    await character_info.save();
    res.redirect('/user/character_info/new');
  } catch (err) {
    console.log(
      'err during during post /user/character_info/new create new character information ' +
        err
    );
    res.redirect('/user/dashboard');
  }
});

//router address: /user/character_info/:id
//descriptions: View Character Indidual Info
//comments:
router.get('/character_info/:id', async (req, res, next) => {
  try {
    let character_info = await Character_Info.findById(req.params.id);
    let character_job = await Character_Job.findById(character_info.Job);
    let character_class = await Character_Class.findById(character_job.Class);
    let character_category = await Character_Category.findById(
      character_job.Category
    );
    let character_professional_skill_1 = await Character_Professional_Skill.findById(
      character_info.Professional_Skill_1
    );
    let character_professional_skill_2 = await Character_Professional_Skill.findById(
      character_info.Professional_Skill_2
    );
    let character_professional_skill_3 = await Character_Professional_Skill.findById(
      character_info.Professional_Skill_3
    );
    let character_professional_skill_4 = await Character_Professional_Skill.findById(
      character_info.Professional_Skill_4
    );
    // console.log('character_info', character_info);
    res.render('02User/character_info_detail', {
      character_info: character_info,
      character_job: character_job,
      character_class: character_class,
      character_category: character_category,
      character_professional_skill_1: character_professional_skill_1,
      character_professional_skill_2: character_professional_skill_2,
      character_professional_skill_3: character_professional_skill_3,
      character_professional_skill_4: character_professional_skill_4
    });
  } catch (err) {
    console.log('err during get /user/character_info/:id ' + err);
    res.redirect('/user');
  }
});

// router address /user/character_info/:id/edit
// descriptions: Show Detail Character Information Revise Form
// comments: Show detail information of a Character Individual Information
router.get('/character_info/:id/edit', async (req, res, next) => {
  try {
    let character_info = await Character_Info.findById(req.params.id);
    let character_jobs = await Character_Job.find({});
    let character_professional_skills = await Character_Professional_Skill.find(
      {}
    );
    let job_default = await Character_Job.findById(character_info.Job);
    //professional_skill_1_default = ps1
    let professional_skill_1_default = await Character_Professional_Skill.findById(
      character_info.Professional_Skill_1
    );
    let professional_skill_2_default = await Character_Professional_Skill.findById(
      character_info.Professional_Skill_2
    );
    let professional_skill_3_default = await Character_Professional_Skill.findById(
      character_info.Professional_Skill_3
    );
    let professional_skill_4_default = await Character_Professional_Skill.findById(
      character_info.Professional_Skill_4
    );
    res.render('02User/character_info_edit', {
      character_info: character_info,
      character_jobs: character_jobs,
      character_professional_skills: character_professional_skills,
      job_default: job_default,
      ps1_default: professional_skill_1_default,
      ps2_default: professional_skill_2_default,
      ps3_default: professional_skill_3_default,
      ps4_default: professional_skill_4_default
    });
  } catch (err) {
    console.log('err during get /user/character_info/:id/edit ' + err);
    res.redirect('/user');
  }
});

// router address /user/character_job/:id/edit
// descriptions: Update Detail Character Job Information
// comments: Change detail information of Character Job
router.put('/character_info/:id/edit', async (req, res, next) => {
  try {
    let character_info = await Character_Info.findById(req.params.id);
    (character_info.ID = req.body.ID),
      (character_info.Name = req.body.Name),
      (character_info.Level = req.body.Level),
      (character_info.Job = req.body.Job),
      (character_info.Target_Usage = req.body.Target_Usage),
      (character_info.Location = req.body.Location),
      (character_info.Professional_Skill_1 = req.body.Professional_Skill_1),
      (character_info.Professional_Skill_2 = req.body.Professional_Skill_2),
      (character_info.Professional_Skill_3 = req.body.Professional_Skill_3),
      (character_info.Professional_Skill_4 = req.body.Professional_Skill_4),
      (character_info.Equip_Slot = req.body.Equip_Slot),
      (character_info.Use_Slot = req.body.Use_Slot),
      (character_info.Etc_Slot = req.body.Etc_Slot),
      (character_info.Setup_Slot = req.body.Setup_Slot),
      (character_info.Tradable_Item = req.body.Tradable_Item),
      (character_info.Movable_Item = req.body.Movable_Item),
      (character_info.Untradable_Item = req.body.Untradable_Item),
      (character_info.Special_Note = req.body.Special_Note),
      console.log(character_info);
    await character_info.save();
    res.redirect('/user/character_info');
  } catch (err) {
    if (character_info == null) {
      console.log(
        'err during put /user/character_info/:id/edit can not find this Character Job on exist database' +
          err
      );
      res.redirect('/user');
    } else {
      console.log(
        'err during put /user/character_info/:id/edit update specific character job information ' +
          err
      );
      res.redirect('/user');
    }
  }
});

module.exports = router;
