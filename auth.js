const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if(user) return res.status(400).json({ message:'Email já cadastrado' });
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    user = new User({ name, email, password:hashed, role });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'dev_secret', { expiresIn: process.env.TOKEN_EXPIRES_IN || '7d' });
    res.json({ token, user:{ id:user._id, name:user.name, email:user.email, role:user.role } });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message: 'Credenciais inválidas' });
    const match = await bcrypt.compare(password, user.password);
    if(!match) return res.status(400).json({ message: 'Credenciais inválidas' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'dev_secret', { expiresIn: process.env.TOKEN_EXPIRES_IN || '7d' });
    res.json({ token, user:{ id:user._id, name:user.name, email:user.email, role:user.role } });
  } catch (err) { res.status(500).json({ message: err.message }); }
});

module.exports = router;