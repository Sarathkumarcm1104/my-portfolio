import React from 'react';
import { profile } from '../data/profile';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DevPortfolio</h3>
            <p>Modern portfolio showcasing expertise in full-stack development</p>
          </div>

          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p><i className="fas fa-envelope"></i> {profile.email}</p>
            <p><i className="fas fa-phone"></i> {profile.phone}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;