import React, { createContext, useState } from 'react';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState('');
  const [ emails, setEmails ] = useState();
  const [ posts, setPosts ] = useState();
  
  

  // Função para definir o token
  const getAuthToken = (newToken) => {
    
    setToken(newToken);    

  };

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


  return (
    <AuthContext.Provider value={{ token, getAuthToken, 
                                buscarEmails, emails,
                                 buscarPosts, posts }}>
      {children}
    </AuthContext.Provider>
  );
};
