const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Character_Info Schema
const Character_InfoSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  Name: {
    type: String,
    required: true,
    maxlength: 30
  },
  Level: {
    type: Number,
    required: true,
    min: 1,
    max: 250
  },
  //Job Relate Category & Class
  Job: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Job'
  },
  Target_Usage: {
    type: String,
    required: true
  },
  //Professional_Skill Relate Type and Level
  Professional_Skill_1: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Professional_Skill'
  },
  Professional_Skill_2: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Professional_Skill'
  },
  Professional_Skill_3: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Professional_Skill'
  },
  Professional_Skill_4: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Professional_Skill'
  },
  Location: {
    type: String,
    required: true
  },
  Equip_Slot: {
    type: String
  },
  Use_Slot: {
    type: String
  },
  Etc_Slot: {
    type: String
  },
  Setup_Slot: {
    type: String
  },
  Tradable_Item: {
    type: String
  },
  Movable_Item: {
    type: String
  },
  Untradable_Item: {
    type: String
  },
  Special_Note: {
    type: String
  }
});

const Character_Info = mongoose.model('Character_Info', Character_InfoSchema);
module.exports = Character_Info;
