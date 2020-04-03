const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Character_Name Schema
const Character_NameSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
    max: 100
  },
  Name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 30
  },
  Level: {
    type: String,
    required: true,
    unique: true,
    min: 1,
    max: 250
  }
});

const Character_Name = mongoose.model('Character_Name', Character_NameSchema);
module.exports = Character_Name;
