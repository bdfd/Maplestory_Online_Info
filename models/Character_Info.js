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
  Job: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Job'
  },
  Target_Usage: {
    type: String,
    required: true
  },
  // Class: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'Character_Class'
  // },
  // Category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'Character_Category'
  // },
  Professional_Skill_1_type: { type: String },
  Professional_Skill_1_level: { type: Number },
  Professional_Skill_2_type: { type: String },
  Professional_Skill_2_level: { type: Number },
  Professional_Skill_3_type: { type: String },
  Professional_Skill_3_level: { type: Number },
  Professional_Skill_4_type: { type: String },
  Professional_Skill_4_level: { type: Number },
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
