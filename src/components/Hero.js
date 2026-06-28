import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Alex Developer</h1>
          <p className="hero-subtitle">Frontend Developer & UI/UX Designer</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-container">
            <img src="https://via.placeholder.com/300x400?text=Your+Photo" alt="Developer Avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;