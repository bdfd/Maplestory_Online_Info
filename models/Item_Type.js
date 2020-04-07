const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Character_Category Schema
const Item_TypeSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
});

const Item_Type = mongoose.model('Item_Type', Item_TypeSchema);
module.exports = Item_Type;
