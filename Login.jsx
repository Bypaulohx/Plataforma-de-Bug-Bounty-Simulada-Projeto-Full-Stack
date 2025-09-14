
import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
export default function Login(){ const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const nav = useNavigate();
  async function handle(e){ e.preventDefault(); try{ const res = await api.post('/auth/login', { email, password }); localStorage.setItem('token', res.data.token); localStorage.setItem('user', JSON.stringify(res.data.user)); if(res.data.user.role === 'company') nav('/company'); else nav('/hacker'); }catch(err){ alert(err.response?.data?.message || 'Erro'); } }
  return (<div className='center'><form onSubmit={handle} className='card'><h2>Login</h2><input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} /><input placeholder='senha' type='password' value={password} onChange={e=>setPassword(e.target.value)} /><button>Entrar</button></form></div>);
}
