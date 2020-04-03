var express = require('express');
var router = express.Router();

// app.use('/user/equipment', userEquipRouter);

/* 



Character Category Function Router Start Here



*/

//router address: /user/character_category
//descriptions: Character_Category List
//comments: Demo all Character_Category Info
// router.get('/character_category', async (req, res, next) => {
//   try {
//     let character_category = await Character_Category.find({});
//     res.render('02User/character_category_list', {
//       character_category: character_category
//     });
//     // console.log(character_category);
//   } catch (err) {
//     console.log('err during get /user/character_category ' + err);
//   }
// });

// //router address: /user/character_category/new
// //descriptions: Show Character_Category Register Form
// //comments: Input Necessary Character_Category Info
// router.get('/character_category/new', (req, res, next) => {
//   res.render('02User/character_category_add');
// });

// //router address: /user/character_category/new
// //descriptions: Obtain New Chara_Category Info
// //comments: Save Into Online MongoDB Database
// router.post('/character_category/new', async (req, res, next) => {
//   // console.log('req.body', req.body)
//   let character_category = new Character_Category({
//     Category_ID: req.body.Category_ID,
//     Category_Name: req.body.Category_Name
//   });
//   // console.log('character_category', character_category);
//   try {
//     await character_category.save();
//     res.redirect('/user/character_category/new');
//   } catch (err) {
//     console.log(
//       'err during post /user/character_category/new create new character_category ' +
//         err
//     );
//     res.render('/user/character_category', {
//       character_category: character_category,
//       error:
//         'Error in post /user/character_category/new Creating Character_Category'
//     });
//   }
// });

// //router address: /user/character_category/:id
// //descriptions: View Character Category
// //comments:
// router.get('/character_category/:id', async (req, res, next) => {
//   try {
//     let character_category = await Character_Category.findById(req.params.id);
//     res.render('02User/character_category_detail', {
//       character_category: character_category
//     });
//   } catch (err) {
//     console.log('err during get /user/character_category/:id ' + err);
//     res.redirect('/user');
//   }
// });

// //router address /user/character_category/:id/edit
// //descriptions: Show Detail Character Category Revise Form
// //comments: Show detail information of a Character Category
// router.get('/character_category/:id/edit', async (req, res, next) => {
//   try {
//     let character_category = await Character_Category.findById(req.params.id);
//     res.render('02User/character_category_edit', {
//       character_category: character_category
//     });
//     // console.log(character_category);
//   } catch (err) {
//     console.log('err during get /user/character_category/:id/edit ' + err);
//     res.redirect('/user');
//   }
// });

// //router address /user/character_category/:id/edit
// //descriptions: Update Detail Character Category Information
// //comments: Change detail information of Character Category
// router.put('/character_category/:id/edit', async (req, res, next) => {
//   let character_category;
//   try {
//     character_category = await Character_Category.findById(req.params.id);
//     (character_category.Category_ID = req.body.Category_ID),
//       (character_category.Category_Name = req.body.Category_Name),
//       await character_category.save();
//     res.redirect('/user/character_category');
//   } catch (err) {
//     if (character_category == null) {
//       console.log(
//         'err during put /user/character_category/:id/edit can not find this Character Category on exist database' +
//           err
//       );
//       res.redirect('/user');
//     } else {
//       console.log(
//         'err during put /user/character_category/:id/edit update specific character category information ' +
//           err
//       );
//       res.redirect('/user');
//     }
//   }
// });

// //router address: /user/equipment/potential
// //descriptions: User Equipment List page
// //comments:Equipment List Page
// router.get('/potential', function(req, res, next) {
//   res.render('02User_Equip/equipment_potential_new');
// });

module.exports = router;
