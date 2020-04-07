const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Item_Info Schema
const Item_InfoSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Type: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Item_Type',
  },
  Buy_In_Low: {
    type: String,
    required: true,
  },
  Buy_In_High: {
    type: String,
    required: true,
  },
  Sell_Out_Price: {
    type: String,
    required: true,
  },
});

const Item_Info = mongoose.model('Item_Info', Item_InfoSchema);
module.exports = Item_Info;
