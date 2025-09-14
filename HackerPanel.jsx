
import { useEffect, useState } from 'react';
import api from '../api';
export default function HackerPanel(){ const [challenges,setChallenges]=useState([]); const [desc,setDesc]=useState(''); const [proof,setProof]=useState(''); const [selected,setSelected]=useState('');
  useEffect(()=>{ api.get('/challenges').then(r=>setChallenges(r.data)).catch(()=>{}); },[]);
  async function submit(e){ e.preventDefault(); try{ await api.post('/submissions', { challengeId:selected, description:desc, proof, severity:'medium' }); alert('Submetido'); setDesc(''); setProof(''); }catch(err){ alert(err.response?.data?.message || 'Erro'); } }
  return (<div style={{padding:20}}><h1>Painel do Hacker</h1><form onSubmit={submit} className='card'><select value={selected} onChange={e=>setSelected(e.target.value)} required><option value=''>Selecione challenge</option>{challenges.map(c=> <option key={c._id} value={c._id}>{c.title}</option>)}</select><textarea placeholder='Descrição da vulnerabilidade' value={desc} onChange={e=>setDesc(e.target.value)} /><input placeholder='Prova (url ou texto)' value={proof} onChange={e=>setProof(e.target.value)} /><button>Submeter</button></form><h2>Challenges Disponíveis</h2>{challenges.map(c=> <div key={c._id} className='card'><b>{c.title}</b><p>{c.description}</p></div>)}</div>); }
