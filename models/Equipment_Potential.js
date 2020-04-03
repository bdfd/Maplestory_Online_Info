const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Equipment_Potential Schema
const Equipment_PotentialSchema = new Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
    max: 50,
  },
  Type: {
    type: String,
    required: true,
    maxlength: 10,
  },
  Number_Of_Line: {
    type: String,
    required: true,
    maxlength: 5,
  },
  Status: {
    type: String,
    required: true,
    maxlength: 20,
  },
  Symbol: {
    type: String,
    required: true,
    maxlength: 5,
  },
});

const Equipment_Potential = mongoose.model(
  'Equipment_Potential',
  Equipment_PotentialSchema
);
module.exports = Equipment_Potential;
