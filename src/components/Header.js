import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <div className="logo">
            <h2>DevPortfolio</h2>
          </div>
          <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
            <li><Link to="#home">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#skills">Skills</Link></li>
            <li><Link to="#projects">Projects</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;