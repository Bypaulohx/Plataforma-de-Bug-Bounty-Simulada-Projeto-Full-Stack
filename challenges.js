const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Challenge = require('../models/Challenge');

router.post('/', auth, async (req, res) => {
  if(req.user.role !== 'company') return res.status(403).json({ message:'Apenas empresas' });
  const { title, description, reward } = req.body;
  const c = new Challenge({ title, description, reward, company: req.user._id });
  await c.save();
  res.json(c);
});

router.get('/', async (req, res) => {
  const list = await Challenge.find({ open:true }).populate('company','name email');
  res.json(list);
});

router.get('/:id', async (req, res) => {
  const c = await Challenge.findById(req.params.id).populate('company','name email');
  if(!c) return res.status(404).json({});
  res.json(c);
});

module.exports = router;