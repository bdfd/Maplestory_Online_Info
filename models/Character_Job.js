const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Character_Job Schema
const Character_JobSchema = new Schema({
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
  Class: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Class'
  },
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Category'
  }
});

const Character_Job = mongoose.model('Character_Job', Character_JobSchema);
module.exports = Character_Job;
