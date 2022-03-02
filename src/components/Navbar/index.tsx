import React from 'react';
import './style.css'
import logo from '../../images/logo-netflix-2.png';
const Navbar: React.FC = () => {
  return (
      <div className='navbar'>
        <a><img className="logo" height={24} src={logo} alt="logo"/></a>
        <ul>
          <li><a>Início</a></li>
          <li><a>Séries</a></li>
          <li><a>Filmes</a></li>
          <li><a>Bombando</a></li>
          <li><a>Minha lista</a></li>
        </ul>
      </div>
  )
}

export default Navbar;