import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css';
import { AuthContext } from '../../context/Context';
import Navbar from '../../components/navbar';

const Posts = () => {

  const navigate = useNavigate();

  const { token, buscarPosts, posts } = useContext(AuthContext);


  async function deletar(e, id) {

    e.preventDefault();
  
    const idDelete = id;
    let auth = 'Bearer '+token;
    
    fetch('https://api-bigsoft-production.up.railway.app/api/post/'+idDelete, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': auth,
      },
    }).then((res) => res.json())
    .then((data) => {
      buscarPosts();
      alert(data.message);
    })
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
    
    verifyLogin();
    
  }, []);

  return (
    <div>
      <div className='feedPosts'>
        <Navbar />
        <h1>Posts</h1>
        {posts && (
          
          posts.map(((post) =>{

            return (
              <div key={post._id} className='cardPost'>
                <p><strong>Titulo:</strong> {post.title}</p>
                <p><strong>Autor:</strong> {post.author}</p>
                <p className='post-description'>{post.description}</p>
                
                <p>Criado: {post.createdAt}</p>
                <div>
                    <button onClick={(e) => deletar(e, post._id)}>Deletar</button>
                    <button>Editar</button>
                </div>
              </div>
            )
          }))
          
        )}
      
      </div>
    </div>
  )
}

export default Posts;