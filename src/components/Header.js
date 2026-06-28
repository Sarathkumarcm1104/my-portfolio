import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Close mobile menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <div className="logo">
            <h2>DevPortfolio</h2>
          </div>
          <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
            <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" onClick={handleLinkClick}>About</a></li>
            <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
            <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
            <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
          </ul>
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}>
          <div className="mobile-menu">
            <div className="mobile-menu-close" onClick={toggleMenu}>
              &times;
            </div>
            <nav>
              <ul>
                <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;