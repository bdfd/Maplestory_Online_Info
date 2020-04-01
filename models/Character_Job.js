const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Character_Job Schema
const Character_JobSchema = new Schema({
  Job_ID: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
    max: 100
  },
  Job_Name: {
    type: String,
    required: true,
    maxlength: 20
  },
  Job_Character_Category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Category'
  },
  Job_Character_Class: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Class'
  }
});

const Character_Job = mongoose.model('Character_Job', Character_JobSchema);
module.exports = Character_Job;
