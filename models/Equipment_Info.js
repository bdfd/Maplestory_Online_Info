const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Equipment_Info Schema
const Equipment_InfoSchema = new Schema({
  Name: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Character_Name',
  },
  Head_Name: {
    type: String,
    required: true,
  },
  Head_Potential_Status: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Equipment_Potential',
  },
  Head_BonusPotential_Status: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Equipment_Potential',
  },
  Head_Status: {
    type: String,
    required: true,
  },
  Head_Descriptions: [
    {
      Potential_Line_1: { type: String },
      Potential_Line_2: { type: String },
      Potential_Line_3: { type: String },
      BounusPotential_Line_1: { type: String },
      BounusPotential_Line_2: { type: String },
      BounusPotential_Line_3: { type: String },
    },
  ],
  //   FaceAccessory_Name: {
  //     type: String,
  //     required: true,
  //   },
  //   FaceAccessory_Potential_Status: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     ref: 'Equipment_Potential',
  //   },
  //   FaceAccessory_BonusPotential_Status: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     ref: 'Equipment_Potential',
  //   },
  //   FaceAccessory_Status: {
  //     type: String,
  //     required: true,
  //   },
  //   FaceAccessory_Descriptions: [
  //     {
  //       Potential_Line_1: { type: String },
  //       Potential_Line_2: { type: String },
  //       Potential_Line_3: { type: String },
  //       BounusPotential_Line_1: { type: String },
  //       BounusPotential_Line_2: { type: String },
  //       BounusPotential_Line_2: { type: String },
  //     },
  //   ],
  //   EyeAccessory_Name: {
  //     type: String,
  //     required: true,
  //   },
  //   EyeAccessory_Potential_Status: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     ref: 'Equipment_Potential',
  //   },
  //   EyeAccessory_BonusPotential_Status: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     ref: 'Equipment_Potential',
  //   },
  //   EyeAccessory_Status: {
  //     type: String,
  //     required: true,
  //   },
  //   EyeAccessory_Descriptions: [
  //     {
  //       Potential_Line_1: { type: String },
  //       Potential_Line_2: { type: String },
  //       Potential_Line_3: { type: String },
  //       BounusPotential_Line_1: { type: String },
  //       BounusPotential_Line_2: { type: String },
  //       BounusPotential_Line_2: { type: String },
  //     },
  //   ],
  //   Top_Name: {
  //     type: String,
  //     required: true,
  //   },
  //   Top_Potential_Status: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     ref: 'Equipment_Potential',
  //   },
  //   Top_BonusPotential_Status: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     ref: 'Equipment_Potential',
  //   },
  //   Top_Status: {
  //     type: String,
  //     required: true,
  //   },
  //   Top_Descriptions: [
  //     {
  //       Potential_Line_1: { type: String },
  //       Potential_Line_2: { type: String },
  //       Potential_Line_3: { type: String },
  //       BounusPotential_Line_1: { type: String },
  //       BounusPotential_Line_2: { type: String },
  //       BounusPotential_Line_2: { type: String },
  //     },
  //   ],
});

const Equipment_Info = mongoose.model('Equipment_Info', Equipment_InfoSchema);
module.exports = Equipment_Info;
