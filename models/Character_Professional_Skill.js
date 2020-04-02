const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Character_Class Schema
const Character_Professional_Skill_Schema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
    min: 0,
    max: 100
  },
  Type: {
    type: String,
    required: true,
    maxlength: 20
  },
  Level: {
    type: Number,
    required: true,
    required: true,
    unique: true,
    min: 0,
    max: 10
  }
});

const Character_Professional_Skill = mongoose.model(
  'Character_Professional_Skill',
  Character_Professional_Skill_Schema
);
module.exports = Character_Professional_Skill;
