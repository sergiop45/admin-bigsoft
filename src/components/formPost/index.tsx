import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { AuthContext } from '../../context/Context';
import ReactQuill from 'react-quill';

const FormPost = () => {

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [autor, setAutor] = useState('');

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  

  useEffect(() => {
    

  }, [])

  const cadastrarPost = (e) => {

    const data = {
      title: titulo,
      description: descricao,
      author: autor
    }
    
    e.preventDefault()
   
    fetch('https://api-bigsoft-production.up.railway.app/api/post', 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data),

    }).then((res) => {
      setTitulo('');
      setDescricao('');
      setAutor('');
      if(res.status === 401) {
        alert("Faça Login!");
        navigate("/login");
      } else {
        alert('Vaga cadastrada!');
      }
      
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className='formPost'>

      <h2>Cadastrar Post </h2>
      <form onSubmit={(e) => cadastrarPost(e)}>
        Titulo: <input type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        Descrição: 
        <ReactQuill theme='snow' value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      
        Autor: <input type="text" name="author" value={autor} onChange={(e) => setAutor(e.target.value)}/>
        
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default FormPost;