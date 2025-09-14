
import { useEffect, useState } from 'react';
import api from '../api';
export default function Dashboard(){ const [challenges,setChallenges]=useState([]); useEffect(()=>{ api.get('/challenges').then(r=>setChallenges(r.data)).catch(()=>{}); },[]); return (<div style={{padding:20}}><h1>Challenges abertos</h1>{challenges.map(c=> (<div key={c._id} className='card'><h3>{c.title} — R$ {c.reward}</h3><p>{c.description}</p></div>))}</div>); }
