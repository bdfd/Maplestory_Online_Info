var express = require('express');
var router = express.Router();

const Item_Type = require('../models/Item_Type');
const Item_Info = require('../models/Item_Info');
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

/* 



Item Info Function Router Start Here



*/

// router address: /user/item/item_info
// descriptions: Item_Info
// comments: Demo all Item Info
router.get('/item_info', async (req, res, next) => {
  try {
    let item_info = await Item_Info.find({});
    let item_type = await Item_Type.find({});
    res.render('02User_Item/item_info_list', {
      item_info: item_info,
      item_type: item_type,
    });
  } catch (err) {
    console.log('err during get /user/item/item_info ' + err);
    res.render('error', {
      error: 'Error in get /user/item/item_info Show Item Info',
    });
  }
});

//router address: /user/item/item_info/new
//descriptions: Show Item_Info Register Form
//comments: Input Necessary Item_Info Info
router.get('/item_info/new', async (req, res, next) => {
  try {
    let item_types = await Item_Type.find({});
    let item_info = new Item_Info();
    res.render('02User_Item/item_info_add', {
      item_types: item_types,
      item_info: item_info,
    });
    // console.log(item_types);
  } catch (err) {
    console.log('err during get /user/item/item_info/new' + err);
    res.render('error', {
      error: 'Error in get /user/item/item_info/new Create Item Info',
    });
  }
});

//router address: /user/item/item_info/new
//descriptions: Obtain New Item Info
//comments: Save Into Online MongoDB Database
router.post('/item_info/new', async (req, res, next) => {
  // console.log('req.body', req.body);
  let item_info = new Item_Info({
    ID: req.body.ID,
    Name: req.body.Name,
    Type: req.body.Type,
    Buy_In_Low: req.body.Buy_In_Low,
    Buy_In_High: req.body.Buy_In_High,
    Sell_Out_Price: req.body.Sell_Out_Price,
  });
  try {
    await item_info.save();
    res.redirect('/user/item/item_info/new');
  } catch (err) {
    console.log(
      'err during during post /user/item/item_info/new create new item_info ' +
        err
    );
    res.render('error', {
      error: 'Error in post /user/item/item_info/new Create Item_Info',
    });
  }
});

//router address: /user/item/item_info/:id
//descriptions: View Item Info
//comments:
router.get('/item_info/:id', async (req, res, next) => {
  try {
    let item_info = await Item_Info.findById(req.params.id);
    let item_type = await Item_Type.findById(item_info.Type);
    res.render('02User_Item/item_info_detail', {
      item_info: item_info,
      item_type: item_type,
    });
  } catch (err) {
    console.log('err during get /user/item/item_info/:id ' + err);
    res.render('error', {
      error: 'Error in get /user/item/item_info/:id Demo Item Info',
    });
  }
});

//router address /user/item/item_info/:id/edit
//descriptions: Show Detail Item Info Revise Form
//comments: Show detail information of a Item Info
router.get('/item_info/:id/edit', async (req, res, next) => {
  try {
    let item_info = await Item_Info.findById(req.params.id);
    let item_types = await Item_Type.find({});
    let type_default = await Item_Type.findById(item_info.Type);
    res.render('02User_Item/item_info_edit', {
      item_info: item_info,
      item_types: item_types,
      type_default: type_default,
    });
  } catch (err) {
    console.log('err during get /user/item/item_info/:id/edit ' + err);
    res.render('error', {
      error: 'Error in get /user/item/item_info/:id/edit Edit Item_Info',
    });
  }
});

//router address /user/item/item_info/:id/edit
//descriptions: Update Detail Item Information
//comments: Change detail information of Item Info
router.put('/item_info/:id/edit', async (req, res, next) => {
  let item_info;
  try {
    item_info = await Item_Info.findById(req.params.id);
    (item_info.ID = req.body.ID),
      (item_info.Name = req.body.Name),
      (item_info.Type = req.body.Type);
    item_info.Buy_In_Low = req.body.Buy_In_Low;
    item_info.Buy_In_High = req.body.Buy_In_High;
    item_info.Sell_Out_Price = req.body.Sell_Out_Price;
    await item_info.save();
    res.redirect('/user/item/item_info');
  } catch (err) {
    if (item_info == null) {
      console.log(
        'err during put /user/item/item_info/:id/edit can not find this Item Info on exist database' +
          err
      );
      res.redirect('/user');
    } else {
      console.log(
        'err during put /user/item/item_info/:id/edit update specific item information ' +
          err
      );
      res.render('error', {
        error: 'Error in put /user/item/item_info/:id/edit Update Item_Info',
      });
    }
  }
});

module.exports = router;
