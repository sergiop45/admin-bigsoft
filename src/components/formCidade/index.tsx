import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const FormCidade = () => {

  const [name, setName] = useState('');
  const [token, setToken] = useState(''); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const getToken = localStorage.getItem('token');
    
    if(getToken) {
    const access_token = JSON.parse(getToken);
    setToken(access_token.access_token);
    } else {
      navigate("/login");
    }
    
  }, []);

  

  async function cadastrarCidade(e) {

    e.preventDefault()

    const data = {
        "name": name
    }
    
    await fetch('http://localhost:3000/city', 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if(res.status === 401) {
        alert("Faça Login!");
        navigate("/login");
      } else {
        alert("Cidade Cadastrada!")
      }
    })
    .catch((err) => console.log(err));

    setName('');
    setToken('');

  }
  

  return (
    <div className='formCidade'>
      <h2>Cadastrar Cidade</h2>
      <form onSubmit={(e) => cadastrarCidade(e)}>
         Nome: <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default FormCidade