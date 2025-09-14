const mongoose = require('mongoose');
const SubmissionSchema = new mongoose.Schema({
  challenge:{type:mongoose.Schema.Types.ObjectId, ref:'Challenge', required:true},
  hacker:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
  description:{type:String},
  proof:{type:String},
  severity:{type:String, enum:['low','medium','high','critical'], default:'low'},
  status:{type:String, enum:['pending','accepted','rejected'], default:'pending'}
},{timestamps:true});
module.exports = mongoose.model('Submission', SubmissionSchema);