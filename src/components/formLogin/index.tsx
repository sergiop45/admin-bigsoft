import { useState, useContext } from 'react';
import {  useNavigate } from 'react-router-dom';
import './style.css';
import { AuthContext } from '../../context/Context';

export const FormLogin = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const { getAuthToken, buscarEmails, buscarPosts } = useContext(AuthContext);
    
    const navigate = useNavigate();

    async function Login (e) {

        e.preventDefault();

        const data = {
            "user": user,
            "password": pass,
        }
        
        await fetch('https://api-bigsoft-production.up.railway.app/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data),
        }).then((res) => res.json())
        .then((dados) => {
            if(!dados.message){
                getAuthToken(dados.token);
                buscarEmails();
                buscarPosts();
                navigate('/home');
            } else {
                alert(dados.message);
                navigate('/login');
            }
            
        })
       .catch((err) => console.log(err));

       

    }





  return (
    <div className='formLogin'>
        <form onSubmit={(e) => Login(e)} >
            
            Email: <input type="text" name="user" onChange={(e) => setUser(e.target.value)}/>
            Senha: <input type="password" name="password" onChange={(e) => setPass(e.target.value)}/>
            <input type="submit" value="Entrar" />
        </form>
    </div>
  )
}

