const mongoose = require('mongoose');
module.exports = async function connectDB(uri){
  if(!uri) uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bugbounty';
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('MongoDB connected');
};