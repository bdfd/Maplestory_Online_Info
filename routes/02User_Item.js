var express = require('express');
var router = express.Router();

const Item_Type = require('../models/Item_Type');
// app.use('/user/item', userItemRouter);

/* 



Item Category Function Router Start Here



*/

//router address: /user/item/item_type
//descriptions: Item_Type List
//comments: Demo all Item_Type Info
router.get('/item_type', async (req, res, next) => {
  try {
    let item_type = await Item_Type.find({});
    res.render('02User_Item/item_type_list', {
      item_type: item_type,
    });
    // console.log(item_type);
  } catch (err) {
    console.log('err during get /user/item/item_type ' + err);
    res.render('error', {
      error: 'Error in get /user/item/item_type Show Item_Type',
    });
  }
});

//router address: /user/item/item_type/new
//descriptions: Show Item_Type Register Form
//comments: Input Necessary Item_Type Info
router.get('/item_type/new', (req, res, next) => {
  res.render('02User_Item/item_type_add');
});

//router address: /user/item/item_type/new
//descriptions: Obtain New Item_Type Info
//comments: Save Into Online MongoDB Database
router.post('/item_type/new', async (req, res, next) => {
  // console.log('req.body', req.body)
  let item_type = new Item_Type({
    ID: req.body.ID,
    Category: req.body.Category,
    Type: req.body.Type,
  });
  // console.log('item_type', item_type);
  try {
    await item_type.save();
    res.redirect('/user/item/item_type/new');
  } catch (err) {
    console.log(
      'err during get /user/item/item_type/new create new item_type ' + err
    );
    res.render('error', {
      error: 'Error in get /user/item/item_type/new Create New Item Type',
    });
  }
});

//router address: /user/item/item_type/:id
//descriptions: View Item Type
//comments:
router.get('/item_type/:id', async (req, res, next) => {
  try {
    let item_type = await Item_Type.findById(req.params.id);
    res.render('02User_Item/item_type_detail', {
      item_type: item_type,
    });
  } catch (err) {
    console.log('err during get /user/item/item_type/:id ' + err);
    res.render('error', {
      error: 'Error in get /user/item/item_type/:id Demo Individual Item Type',
    });
  }
});

//router address /user/item/item_type/:id/edit
//descriptions: Show Detail Item Type Revise Form
//comments: Show detail information of a Item Type
router.get('/item_type/:id/edit', async (req, res, next) => {
  try {
    let item_type = await Item_Type.findById(req.params.id);
    res.render('02User_Item/item_type_edit', {
      item_type: item_type,
    });
  } catch (err) {
    console.log('err during get /user/item/item_type/:id/edit ' + err);
    res.render('error', {
      error: 'Error in get /user/item/item_type/:id/edit Edit Item Type',
    });
  }
});

//router address /user/item/item_type/:id/edit
//descriptions: Update Detail Item Type Information
//comments: Change detail information of Item Type
router.put('/item_type/:id/edit', async (req, res, next) => {
  let item_type;
  try {
    item_type = await Item_Type.findById(req.params.id);
    (item_type.ID = req.body.ID),
      (item_type.Category = req.body.Category),
      (item_type.Type = req.body.Type),
      await item_type.save();
    res.redirect('/user/item/item_type');
  } catch (err) {
    if (item_type == null) {
      console.log(
        'err during put /user/item/item_type/:id/edit can not find this Item Type on exist database' +
          err
      );
      res.redirect('/user');
    } else {
      console.log(
        'err during put /user/item/item_type/:id/edit update specific item type information ' +
          err
      );
      res.render('error', {
        error: 'Error in put /user/item/item_type/:id/edit Update Item Type',
      });
    }
  }
});

module.exports = router;
