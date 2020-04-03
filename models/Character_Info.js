const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Character_Info Schema
const Character_InfoSchema = new Schema({
  //Name-> includes: ID, Name, Level, Job
  //Job-> includes: Category & Class
  Name: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Name',
  },
  Target_Usage: {
    type: String,
    required: true,
  },
  //Professional_Skill-> includes: Type and Level
  Professional_Skill_1: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Professional_Skill',
  },
  Professional_Skill_2: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Professional_Skill',
  },
  Professional_Skill_3: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Professional_Skill',
  },
  Professional_Skill_4: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Professional_Skill',
  },
  Location: {
    type: String,
    required: true,
  },
  Equip_Slot: {
    type: String,
  },
  Use_Slot: {
    type: String,
  },
  Etc_Slot: {
    type: String,
  },
  Setup_Slot: {
    type: String,
  },
  Tradable_Item: {
    type: String,
  },
  Movable_Item: {
    type: String,
  },
  Untradable_Item: {
    type: String,
  },
  Special_Note: {
    type: String,
  },
});

const Character_Info = mongoose.model('Character_Info', Character_InfoSchema);
module.exports = Character_Info;
