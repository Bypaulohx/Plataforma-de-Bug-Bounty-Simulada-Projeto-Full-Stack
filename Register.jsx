
import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
export default function Register(){ const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [role,setRole]=useState('hacker'); const nav = useNavigate();
  async function handle(e){ e.preventDefault(); try{ const res = await api.post('/auth/register', { name, email, password, role }); localStorage.setItem('token', res.data.token); localStorage.setItem('user', JSON.stringify(res.data.user)); nav('/dashboard'); }catch(err){ alert(err.response?.data?.message || 'Erro'); } }
  return (<div className='center'><form onSubmit={handle} className='card'><h2>Register</h2><input placeholder='nome' value={name} onChange={e=>setName(e.target.value)} /><input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} /><input placeholder='senha' type='password' value={password} onChange={e=>setPassword(e.target.value)} /><select value={role} onChange={e=>setRole(e.target.value)}><option value='hacker'>Hacker</option><option value='company'>Company</option></select><button>Cadastrar</button></form></div>);
}
