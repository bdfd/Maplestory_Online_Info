const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Character_Class Schema
const Character_ClassSchema = new Schema({
  Class_Id: {
    type: String,
    required: true
  },
  Class_Name: {
    type: String,
    required: true
  },
  Category_Type: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Category'
  }
});

const Character_Class = mongoose.model(
  'Character_Class',
  Character_ClassSchema
);
module.exports = Character_Class;
