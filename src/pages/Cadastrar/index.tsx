import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormCidade from '../../components/formCidade';
import FormPost from '../../components/formPost';
import './style.css';
import Navbar from '../../components/navbar';

const Cadastrar = () => {

  const [cadastro, setCadastro] = useState(1)
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  

 
  return (
    <div className='page-cadastro'>
      <Navbar/>
      <nav className='navCadastro'>
        <button onClick={() => setCadastro(1)}>Posts</button>
        <button onClick={() => setCadastro(2)}>Emails</button>
        <button onClick={() => setCadastro(3)}>Usuarios</button>
      </nav>

      {cadastro === 1 && <FormPost/>}
      {cadastro === 2 && <FormCidade/>}
      
      
    </div>
    
  )
}

export default Cadastrar