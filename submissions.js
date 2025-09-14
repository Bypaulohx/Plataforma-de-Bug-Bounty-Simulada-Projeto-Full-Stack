const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Submission = require('../models/Submission');
const Challenge = require('../models/Challenge');

router.post('/', auth, async (req, res) => {
  if(req.user.role !== 'hacker') return res.status(403).json({ message:'Apenas hackers podem submeter' });
  const { challengeId, description, proof, severity } = req.body;
  const challenge = await Challenge.findById(challengeId);
  if(!challenge) return res.status(404).json({ message:'Challenge não encontrado' });
  const sub = new Submission({ challenge:challengeId, hacker:req.user._id, description, proof, severity });
  await sub.save();
  res.json(sub);
});

router.get('/challenge/:challengeId', auth, async (req, res) => {
  const challenge = await Challenge.findById(req.params.challengeId);
  if(!challenge) return res.status(404).json({});
  if(String(challenge.company) !== String(req.user._id)) return res.status(403).json({ message:'Não autorizado' });
  const subs = await Submission.find({ challenge: req.params.challengeId }).populate('hacker','name email');
  res.json(subs);
});

router.put('/:id/status', auth, async (req, res) => {
  const { status } = req.body;
  const sub = await Submission.findById(req.params.id).populate('challenge');
  if(!sub) return res.status(404).json({});
  if(String(sub.challenge.company) !== String(req.user._id)) return res.status(403).json({ message:'Não autorizado' });
  sub.status = status;
  await sub.save();
  res.json(sub);
});

module.exports = router;