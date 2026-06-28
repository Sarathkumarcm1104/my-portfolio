import React from 'react';
import { profile } from '../data/profile';
import './Hero.css';

// Quick stats shown below the buttons in the hero.
// Years of experience is sourced from the bio copy; project count is from
// projects.js — adjust these if either changes.
const stats = [
  { value: '2.5+', label: 'Years Exp.' },
  { value: '4', label: 'Projects' },
  { value: 'Open', label: 'To Work' },
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">{profile.name}</span>
          </h1>
          <p className="hero-subtitle">{profile.title}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Work <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
            </a>
          </div>
          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-ring" aria-hidden="true"></div>
          <div className="avatar-container">
            <div className="avatar-fallback">
              <span className="avatar-initials">SK</span>
            </div>
          </div>
          <span className="avatar-badge">
            <span className="avatar-badge-dot" aria-hidden="true"></span>
            Available for hire
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;