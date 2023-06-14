import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Context';
import './home.css';
import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';


const Home = () => {

  const [ emails, setEmails ] = useState();
  const [ posts, setPosts ] = useState();

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  async function buscarEmails () {

    await fetch('https://api-bigsoft-production.up.railway.app/api/email')
    .then((res) => res.json()).then((data) => setEmails(data))
    .catch((err) => alert(err));
    
  }

  async function buscarPosts () {

    await fetch('https://api-bigsoft-production.up.railway.app/api/post')
    .then((res) => res.json()).then((data) => setPosts(data))
    .catch((err) => alert(err));
    
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
      } else {
        buscarEmails();
        buscarPosts();
      }
     
    })
    .catch((err) => console.log('err : '+err));

  }

  useEffect(() => {

    verifyLogin();
    

  }, [])



  return (
    <div className='home'>

      <Navbar />
      
      <h2 className='title-home'>BigSoft</h2>
      

      <div className='container'>

        <div className='emails'>
          
          <h2>Emails</h2>

          <div>
            { emails && emails.length}
          </div>

        </div>

        <div className='posts'>
          
          <h2>Posts</h2>

          <div>
            { posts && posts.length }
          </div>

        </div>

      </div>

      <Footer />
      
      </div>
  )
}

export default Home