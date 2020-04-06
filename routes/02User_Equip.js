var express = require('express');
var router = express.Router();

const Equipment_Potential = require('../models/Equipment_Potential');
const Equipment_Info = require('../models/Equipment_Info');
const Character_Name = require('../models/Character_Name');
const Character_Job = require('../models/Character_Job');
const Character_Category = require('../models/Character_Category');
const Character_Class = require('../models/Character_Class');
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
      error: 'Error in get /user/equipment/equipment_info/ Show Equipment_Info',
    });
  }
});

//router address: /user/equipment/equipment_info/new
//descriptions: Show Equipment Info Register Form
//comments: Input Necessary Equipment Information
router.get('/equipment_info/new', async (req, res, next) => {
  try {
    let character_names = await Character_Name.find({});

    let equipment_potentials = await Equipment_Potential.find({});
    let equipment_info = new Equipment_Info();
    res.render('02User_Equip/equipment_info_add', {
      character_names: character_names,
      equipment_potentials: equipment_potentials,
      equipment_info: equipment_info,
    });
  } catch (err) {
    console.log('err during get /user/equipment/equipment_info/new' + err);
    res.render('error', {
      error:
        'Error in get /user/equipment/equipment_info/new Create Equipment_Info',
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
    Attack_Range_Low: req.body.Attack_Range_Low,
    Attack_Range_High: req.body.Attack_Range_High,
    Head_Name: req.body.Head_Name,
    Head_Status: req.body.Head_Status,
    Head_StarEnhancement: req.body.Head_StarEnhancement,
    Head_StarEnhancement_Total: req.body.Head_StarEnhancement_Total,
    Head_Potential_Status: req.body.Head_Potential_Status,
    Head_BonusPotential_Status: req.body.Head_BonusPotential_Status,
    Head_Descriptions: {
      Potential_Line_1: req.body.Head_Potential_Line_1,
      Potential_Line_2: req.body.Head_Potential_Line_2,
      Potential_Line_3: req.body.Head_Potential_Line_3,
      BonusPotential_Line_1: req.body.Head_BonusPotential_Line_1,
      BonusPotential_Line_2: req.body.Head_BonusPotential_Line_2,
      BonusPotential_Line_3: req.body.Head_BonusPotential_Line_3,
    },
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
        'Error in post /user/equipment/equipment_info/new Create Equipment Info Potential',
    });
  }
});

//router address: /user/equipment/equipment_info/:id
//descriptions: View Equipment Indidual Info
//comments:
router.get('/equipment_info/:id', async (req, res, next) => {
  try {
    let equipment_info = await Equipment_Info.findById(req.params.id);
    let character_name = await Character_Name.findById(equipment_info.Name);
    let character_job = await Character_Job.findById(character_name.Job);
    let character_class = await Character_Class.findById(character_job.Class);
    let character_category = await Character_Category.findById(
      character_job.Category
    );
    let equipment_potential = await Equipment_Potential.findById(
      equipment_info.Head_Potential_Status
    );
    let equipment_bonus_potential = await Equipment_Potential.findById(
      equipment_info.Head_BonusPotential_Status
    );

    res.render('02User_Equip/equipment_info_detail', {
      equipment_info: equipment_info,
      character_name: character_name,
      character_job: character_job,
      character_class: character_class,
      character_category: character_category,
      equipment_potential: equipment_potential,
      equipment_bonus_potential: equipment_bonus_potential,
    });
    // console.log(equipment_info);
  } catch (err) {
    console.log('err during get /user/equipment/equipment_info/:id ' + err);
    res.render('error', {
      error:
        'Error in get /user/equipment/equipment_info/:id Demo Equipment_Info',
    });
  }
});

// router address /user/equipment/equipment_info/:id/edit/head
// descriptions: Show Detail Equipment Head Information Revise Form
// comments: Show detail information of a Equipment-Head Information
router.get('/equipment_info/:id/edit/head', async (req, res, next) => {
  try {
    let equipment_info = await Equipment_Info.findById(req.params.id);
    let character_names = await Character_Name.find({});
    let equipment_potentials = await Equipment_Potential.find({});
    let name_default = await Character_Name.findById(equipment_info.Name);
    let potential_default = await Equipment_Potential.findById(
      equipment_info.Head_Potential_Status
    );
    let bonus_potential_default = await Equipment_Potential.findById(
      equipment_info.Head_BonusPotential_Status
    );
    // console.log(potential_default);
    res.render('02User_Equip/equipment_info_edit', {
      equipment_info: equipment_info,
      character_names: character_names,
      equipment_potentials: equipment_potentials,
      name_default: name_default,
      potential_default: potential_default,
      bonus_potential_default: bonus_potential_default,
    });
  } catch (err) {
    console.log(
      'err during get /user/equipment/equipment_info/:id/edit/head' + err
    );
    res.render('error', {
      error:
        'Error in get /user/equipment/equipment_info/:id/edit/head Edit Equipment Head Info',
    });
  }
});

// router address /user/character_job/:id/edit/head
// descriptions: Update Detail CEquipment Head Information
// comments: Change detail information of Equipment Head Information
router.put('/equipment_info/:id/edit/head', async (req, res, next) => {
  try {
    let equipment_info = await Equipment_Info.findById(req.params.id);
    let id = equipment_info.id;
    (equipment_info.Head_Name = req.body.Head_Name),
      (equipment_info.Status = req.body.Status),
      (equipment_info.Head_StarEnhancement = req.body.Head_StarEnhancement),
      (equipment_info.Head_StarEnhancement_Total =
        req.body.Head_StarEnhancement_Total),
      (equipment_info.Head_Potential_Status = req.body.Head_Potential_Status),
      (equipment_info.Head_BonusPotential_Status =
        req.body.Head_BonusPotential_Status),
      console.log(equipment_info.Head_Name);
    (equipment_info.Head_Descriptions[0].Potential_Line_1 =
      req.body.Potential_Line_1),
      (equipment_info.Head_Descriptions[0].Potential_Line_2 =
        req.body.Potential_Line_2),
      (equipment_info.Head_Descriptions[0].Potential_Line_3 =
        req.body.Potential_Line_3),
      (equipment_info.Head_Descriptions[0].BonusPotential_Line_1 =
        req.body.BonusPotential_Line_1),
      (equipment_info.Head_Descriptions[0].BonusPotential_Line_2 =
        req.body.BonusPotential_Line_2),
      (equipment_info.Head_Descriptions[0].BonusPotential_Line_3 =
        req.body.BonusPotential_Line_3),
      await equipment_info.save();
    res.redirect('/user/equipment/equipment_info/');
  } catch (err) {
    if (equipment_info == null) {
      console.log(
        'err during put /user/character_job/:id/edit/head can not find this Equipment Head on exist database' +
          err
      );
      res.redirect('/user');
    } else {
      console.log(
        'err during put /user/character_job/:id/edit/head update specific equipment head information ' +
          err
      );
      res.render('error', {
        error:
          'Error in put /user/character_job/:id/edit/head Update Equipment_Head Info',
      });
    }
  }
});

module.exports = router;
