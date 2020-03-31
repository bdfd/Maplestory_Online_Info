const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Character_Category Schema
const Character_CategorySchema = new Schema({
  Category_ID: {
    type: String,
    required: true
  },
  Category_Name: {
    type: String,
    required: true
  }
});

const Character_Category = mongoose.model(
  'Character_Category',
  Character_CategorySchema
);
module.exports = Character_Category;
