
import { useState, useEffect } from 'react';
import api from '../api';
export default function CompanyPanel(){ const [title,setTitle]=useState(''); const [desc,setDesc]=useState(''); const [reward,setReward]=useState(0); const [myChallenges,setMyChallenges]=useState([]);
  useEffect(()=>{ api.get('/challenges').then(r=>setMyChallenges(r.data)).catch(()=>{}); },[]);
  async function create(e){ e.preventDefault(); try{ await api.post('/challenges', { title, description:desc, reward }); alert('Criado'); setTitle(''); setDesc(''); }catch(err){ alert(err.response?.data?.message || 'Erro'); } }
  return (<div style={{padding:20}}><h1>Painel da Empresa</h1><form onSubmit={create} className='card'><input placeholder='Título' value={title} onChange={e=>setTitle(e.target.value)} /><textarea placeholder='Descrição' value={desc} onChange={e=>setDesc(e.target.value)} /><input type='number' value={reward} onChange={e=>setReward(Number(e.target.value))} /><button>Criar Challenge</button></form><h2>Seus challenges ou abertos</h2>{myChallenges.map(c=> <div key={c._id} className='card'><b>{c.title}</b><p>{c.description}</p></div>)}</div>); }
