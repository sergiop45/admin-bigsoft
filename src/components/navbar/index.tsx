import React, { useState } from 'react';
import './style.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header'>
      <div className='logo'>
        <div className='logotext'>
          <span className='b'>B</span>igsoft
        </div>
        <div className='rectangules'>
          <div className='rectangule1'></div>
          <div className='rectangule2'></div>
          <div className='rectangule3'></div>
          <div className='rectangule4'></div>
        </div>
      </div>
      <GiHamburgerMenu className='btn-menu' onClick={toggleMenu} />

      <div className='desktop'>
          
        <Link to='/'>Home</Link>
        <Link to='/post'>Posts</Link>
        <Link to='/email'>Emails</Link>
        <Link to='/cadastrar'>Cadastrar</Link>
        <Link to='/login' >Login</Link>
          
      </div>

      {menuOpen && (
        <div className='menu'>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/post'>Posts</Link>
            <Link to='/email'>Emails</Link>
            <Link to='/cadastrar'>Cadastrar</Link>
            <Link to='/login' >Login</Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;