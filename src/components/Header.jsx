import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="menu container">
        <Link to="/" className="logo"></Link>
        <input 
          type="checkbox" 
          id="menu" 
          checked={isMenuOpen} 
          onChange={toggleMenu}
        />
        <label htmlFor="menu">
          <img src="/src/assets/images/Menu.png" className="menu-icono" alt="Menu" />
        </label>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Da Capo</Link></li>
            <li><Link to="/informacion">Información</Link></li>
          </ul>
        </nav>
      </div>

      <div className="header-content container">
        <h1>Da Capo</h1>
      </div>
    </header>
  );
};

export default Header;