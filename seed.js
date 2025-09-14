const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../src/models/User');
const Challenge = require('../src/models/Challenge');

async function main(){
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bugbounty';
  await mongoose.connect(uri);
  console.log('Connected to', uri);

  let company = await User.findOne({ email:'company@example.com' });
  if(!company){
    const pwd = await bcrypt.hash('password123', 10);
    company = await User.create({ name:'ACME Corp', email:'company@example.com', password:pwd, role:'company' });
  }

  let h1 = await User.findOne({ email:'hacker1@example.com' });
  if(!h1){
    const pwd = await bcrypt.hash('hunter1', 10);
    h1 = await User.create({ name:'Hacker One', email:'hacker1@example.com', password:pwd, role:'hacker' });
  }
  let h2 = await User.findOne({ email:'hacker2@example.com' });
  if(!h2){
    const pwd = await bcrypt.hash('hunter2', 10);
    h2 = await User.create({ name:'Hacker Two', email:'hacker2@example.com', password:pwd, role:'hacker' });
  }

  const existing = await Challenge.findOne({ title:'SQL Injection - Login' });
  if(!existing){
    await Challenge.create({ title:'SQL Injection - Login', description:'Find a way to bypass the login using SQL injection.', reward:500, company:company._id });
    await Challenge.create({ title:'Insecure Direct Object Reference', description:'Access another user data via ID tampering.', reward:300, company:company._id });
  }

  const companyToken = jwt.sign({ id: company._id }, process.env.JWT_SECRET || 'dev_secret', { expiresIn: '30d' });
  console.log('Company login token (30d):', companyToken);
  process.exit(0);
}

main().catch(err=>{ console.error(err); process.exit(1);} );