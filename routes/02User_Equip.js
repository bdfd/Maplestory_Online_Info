var express = require('express');
var router = express.Router();

const Equipment_Potential = require('../models/Equipment_Potential');
const Equipment_Info = require('../models/Equipment_Info');
const Character_Name = require('../models/Character_Name');
const Character_Job = require('../models/Character_Job');
// app.use('/user/equipment', userEquipRouter);

/* 



Equipment Potential Function Router Start Here



*/

// router address: /user/equipment/equipment_potential
// descriptions: Character_Category List
// comments: Demo all Character_Category Info
router.get('/equipment_potential', async (req, res, next) => {
  try {
    let equipment_potential = await Equipment_Potential.find({});
    res.render('02User_Equip/equipment_potential_list', {
      equipment_potential: equipment_potential,
    });
    // console.log(character_category);
  } catch (err) {
    console.log('err during get /user/equipment/equipment_potential ' + err);
    res.render('error', {
      error:
        'Error in post /user/equipment/equipment_potential/new Creating /equipment/Equipment Potential',
    });
  }
});

//router address: /user/equipment/equipment_potential/new
//descriptions: Show Character_Category Register Form
//comments: Input Necessary Character_Category Info
router.get('/equipment_potential/new', (req, res, next) => {
  res.render('02User_Equip/equipment_potential_add');
});

//router address: /user/equipment/equipment_potential/new
//descriptions: Obtain New Equipment_Potential Info
//comments: Save Into Online MongoDB Database
router.post('/equipment_potential/new', async (req, res, next) => {
  //   console.log('req.body', req.body);
  let equipment_potential = new Equipment_Potential({
    ID: req.body.ID,
    Type: req.body.Type,
    Symbol: req.body.Symbol,
    Number_Of_Line: req.body.Number_Of_Line,
    Status: req.body.Status,
  });
  try {
    await equipment_potential.save();
    res.redirect('/user/equipment/equipment_potential/new');
  } catch (err) {
    console.log(
      'err during post /user/equipment/equipment_potential/new create new equipment_potential ' +
        err
    );
    res.render('error', {
      error:
        'Error in post /user/equipment/equipment_potential/new Creating /equipment/Equipment Potential',
    });
  }
});

//router address: /user/equipment/equipment_potential/:id
//descriptions: View Character Category
//comments:
router.get('/equipment_potential/:id', async (req, res, next) => {
  try {
    let equipment_potential = await Equipment_Potential.findById(req.params.id);
    res.render('02User_Equip/equipment_potential_detail', {
      equipment_potential: equipment_potential,
    });
  } catch (err) {
    console.log(
      'err during get /user/equipment/equipment_potential/:id ' + err
    );
    res.render('error', {
      error:
        'Error in post /user/equipment/equipment_potential/new Creating /equipment/Equipment Potential',
    });
  }
});

//router address /user/equipment/equipment_potential/:id/edit
//descriptions: Show Detail Equipment Potential Revise Form
//comments: Show detail information of a Equipment Potential
router.get('/equipment_potential/:id/edit', async (req, res, next) => {
  try {
    let equipment_potential = await Equipment_Potential.findById(req.params.id);
    res.render('02User_Equip/equipment_potential_edit', {
      equipment_potential: equipment_potential,
    });
  } catch (err) {
    console.log(
      'err during get /user/equipment/equipment_potential/:id/edit ' + err
    );
    res.render('error', {
      error:
        'Error in post /user/equipment/equipment_potential/new Creating /equipment/Equipment Potential',
    });
  }
});

//router address /user/equipment/equipment_potential/:id/edit
//descriptions: Update Detail Equipment Potential Information
//comments: Change detail information of Equipment Potential
router.put('/equipment_potential/:id/edit', async (req, res, next) => {
  let equipment_potential;
  try {
    equipment_potential = await Equipment_Potential.findById(req.params.id);
    (equipment_potential.ID = req.body.ID),
      (equipment_potential.Type = req.body.Type),
      (equipment_potential.Number_Of_Line = req.body.Number_Of_Line),
      (equipment_potential.Status = req.body.Status),
      (equipment_potential.Symbol = req.body.Symbol),
      await equipment_potential.save();
    res.redirect('/user/equipment/equipment_potential');
  } catch (err) {
    if (equipment_potential == null) {
      console.log(
        'err during put /user/equipment/equipment_potential/:id/edit can not find this Equipment Potentail on exist database' +
          err
      );
      res.render('error', {
        error:
          'err during put /user/equipment/equipment_potential/:id/edit can not find this Equipment Potentail on exist database',
      });
    } else {
      console.log(
        'err during put /user/equipment/equipment_potential/:id/edit update specific equipment potential information ' +
          err
      );
      res.render('error', {
        error:
          'err during put /user/equipment/equipment_potential/:id/edit update specific equipment potential information',
      });
    }
  }
});

/* 



Character Info Function Router Start Here



*/

//router address: /user/equipment/equipment_info/
//descriptions: Character Info List
//comments: Demo all Character Information
router.get('/equipment_info', async (req, res, next) => {
  try {
    let equipment_info = await Equipment_Info.find({});
    let character_name = await Character_Name.find({});
    let character_job = await Character_Job.find({});
    let equipment_potential = await Equipment_Potential.find({});

    res.render('02User_Equip/equipment_info_list', {
      equipment_info: equipment_info,
      character_name: character_name,
      character_job: character_job,
      equipment_potential: equipment_potential,
    });
    console.log(equipment_info);
  } catch (err) {
    console.log('err during get /user/equipment/equipment_info/ ' + err);
    res.render('error', {
      error:
        'Error in get /user/equipment/equipment_info/ Creating Equipment_Info',
    });
  }
});

//router address: /user/equipment/equipment_info/new
//descriptions: Show Equipment Info Register Form
//comments: Input Necessary Equipment Information
router.get('/equipment_info/new', async (req, res, next) => {
  try {
    let character_names = await Character_Name.find({});

    let equipment_potentails = await Equipment_Potential.find({});
    let equipment_info = new Equipment_Info();
    res.render('02User_Equip/equipment_info_add', {
      character_names: character_names,
      equipment_potentails: equipment_potentails,
      equipment_info: equipment_info,
    });
  } catch (err) {
    console.log('err during get /user/equipment/equipment_info/new' + err);
    res.render('error', {
      error:
        'Error in get /user/equipment/equipment_info/new Creating Equipment_Info',
    });
  }
});

//router address: /user/equipment/equipment_info/new
//descriptions: Obtain New Equipment_Information
//comments: Save Into Online MongoDB Database
router.post('/equipment_info/new', async (req, res, next) => {
  console.log('req.body', req.body);
  let equipment_info = new Equipment_Info({
    Name: req.body.Name,
    Head_Name: req.body.Head_Name,
    Attack_Range_Low: req.body.Attack_Range_Low,
    Attack_Range_High: req.body.Attack_Range_High,
    Head_Potential_Status: req.body.Head_Potential_Status,
    Head_BonusPotential_Status: req.body.Head_BonusPotential_Status,
    Head_Status: req.body.Head_Status,
    Head_Descriptions: {
      Potential_Line_1: req.body.Head_Potential_Line_1,
      Potential_Line_2: req.body.Head_Potential_Line_2,
      Potential_Line_3: req.body.Head_Potential_Line_3,
      BounusPotential_Line_1: req.body.Head_BounusPotential_Line_1,
      BounusPotential_Line_2: req.body.Head_BounusPotential_Line_2,
      BounusPotential_Line_3: req.body.Head_BounusPotential_Line_3,
    },
    Head_StarEnhancement: req.body.Head_StarEnhancement,
    Head_StarEnhancement_Total: req.body.Head_StarEnhancement_Total,
  });
  console.log('equipment_info ', equipment_info);
  try {
    await equipment_info.save();
    res.redirect('/user/equipment/equipment_info/new');
  } catch (err) {
    console.log(
      'err during post /user/equipment/equipment_info/new create new equipment info ' +
        err
    );
    res.render('error', {
      error:
        'Error in post /user/equipment/equipment_info/new Creating Equipment Info Potential',
    });
  }
});

//router address: /user/character_info/:id
//descriptions: View Character Indidual Info
//comments:
router.get('/character_info/:id', async (req, res, next) => {
  try {
    let character_info = await Character_Info.findById(req.params.id);
    // console.log('character_info', character_info);
    let character_name = await Character_Name.findById(character_info.Name);
    // console.log('character_name', character_name);
    let character_job = await Character_Job.findById(character_name.Job);
    // console.log('character_job', character_job);
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
      character_name: character_name,
      character_job: character_job,
      character_class: character_class,
      character_category: character_category,
      character_professional_skill_1: character_professional_skill_1,
      character_professional_skill_2: character_professional_skill_2,
      character_professional_skill_3: character_professional_skill_3,
      character_professional_skill_4: character_professional_skill_4,
    });
  } catch (err) {
    console.log('err during get /user/character_info/:id ' + err);
    res.render('error', {
      error:
        'Error in post /user/character_category/name Creating Character_Category',
    });
  }
});

module.exports = router;
