const mongoose = require('mongoose');
const ChallengeSchema = new mongoose.Schema({
  title:{type:String, required:true},
  description:{type:String},
  reward:{type:Number, default:0},
  company:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
  open:{type:Boolean, default:true}
},{timestamps:true});
module.exports = mongoose.model('Challenge', ChallengeSchema);