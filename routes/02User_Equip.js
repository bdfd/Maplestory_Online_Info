var express = require('express');
var router = express.Router();

const Equipment_Potential = require('../models/Equipment_Potential');
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
  console.log('req.body', req.body);
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

// //router address: /user/equipment/potential
// //descriptions: User Equipment List page
// //comments:Equipment List Page
// router.get('/potential', function(req, res, next) {
//   res.render('02User_Equip/equipment_potential_new');
// });

module.exports = router;
