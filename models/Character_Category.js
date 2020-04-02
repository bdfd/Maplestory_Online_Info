const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Character_Category Schema
const Character_CategorySchema = new Schema({
  Category_ID: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
    max: 15
  },
  Category_Name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 20
  }
});

const Character_Category = mongoose.model(
  'Character_Category',
  Character_CategorySchema
);
module.exports = Character_Category;
