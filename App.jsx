
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CompanyPanel from './pages/CompanyPanel';
import HackerPanel from './pages/HackerPanel';
function App(){ return (<BrowserRouter><Routes><Route path='/' element={<Navigate to='/dashboard' />} /><Route path='/login' element={<Login />} /><Route path='/register' element={<Register />} /><Route path='/dashboard' element={<Dashboard />} /><Route path='/company' element={<CompanyPanel />} /><Route path='/hacker' element={<HackerPanel />} /></Routes></BrowserRouter>); }
export default App;
