import React, { useState, useEffect } from 'react';
import { profile } from '../data/profile';
import './Header.css';

// Section ids this nav links to. The active link is highlighted based on
// which section is currently in the viewport.
const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close mobile menu when a link is tapped
  const handleLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  // Track scroll position — adds a stronger shadow + solid background
  // once the user scrolls past the hero, so the header stays readable.
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link for whichever section is in view.
  // Falls back to the first section if none are intersecting yet.
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest visible ratio — that's the
        // section the user is currently looking at.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
        <nav className="nav-container">
          <a href="#home" className="logo" onClick={handleLinkClick} aria-label="Home">
            <span className="logo-mark" aria-hidden="true">
              <i className="fas fa-code"></i>
            </span>
            <span className="logo-text">{profile.name.split(' ')[0]}</span>
          </a>

          <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                  className={activeSection === item.id ? 'is-active' : ''}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resume}
            className="nav-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
            <span>Resume</span>
          </a>

          <div
            className={isMenuOpen ? 'mobile-menu-icon active' : 'mobile-menu-icon'}
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            tabIndex={0}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-close" onClick={toggleMenu}>
              &times;
            </div>
            <nav>
              <ul>
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={handleLinkClick}
                      className={activeSection === item.id ? 'is-active' : ''}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mobile-resume-item">
                  <a
                    href={profile.resume}
                    className="mobile-resume-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    <i className="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
                    Download Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;