const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Character_Class Schema
const Character_ClassSchema = new Schema({
  Class_No: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
    max: 15
  },
  Class_Name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 20
  }
});

const Character_Class = mongoose.model(
  'Character_Class',
  Character_ClassSchema
);
module.exports = Character_Class;
