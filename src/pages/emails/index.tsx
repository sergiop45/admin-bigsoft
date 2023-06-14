import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import CardVaga from '../../components/cardEmail';
import './style.css';
import { AuthContext } from '../../context/Context';
import Navbar from '../../components/navbar';

const Email = () => {


  const navigate = useNavigate();

  const { token, emails, buscarEmails } = useContext(AuthContext);
  
  async function deletar(e, id) {

    e.preventDefault();
    
    const idDelete = id+'';
    
    fetch('https://api-bigsoft-production.up.railway.app/api/email/'+idDelete, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    }).then((res) => res.json())
    .then((data) => buscarEmails())
    .catch((err) => console.log('err : '+err));

  }

  async function verifyLogin() {

    let auth = 'Bearer '+ token;
    
    fetch('https://api-bigsoft-production.up.railway.app/api/user', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': auth,
      },
    }).then((res) => {
      if(res.status == 401) {
        navigate("/login")
      }
      
    })
    .catch((err) => console.log('err : '+err));

  }


  

  useEffect(() => {
    
    verifyLogin()
    
  }, []);


  return (
    <div>
      <div className='feedEmails'>

      <Navbar />

        <h1>Emails</h1>
        {emails && (
          emails.map(((email) =>{
            return (

              <CardVaga email={email} key={email._id} deletar={deletar}/>  )
          }))
          
        )}
        
      </div>
    </div>
  )
}

export default Email;