import React from 'react';
import { profile } from '../data/profile';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{profile.bio}</p>
            <p>I specialize in creating modern, responsive websites that are not only visually appealing but also highly functional and user-friendly. My approach combines clean code with innovative design solutions to deliver exceptional user experiences.</p>
            <div className="about-info">
              <div className="info-item">
                <h3>Availability</h3>
                <p>Available for freelance projects</p>
              </div>
              <div className="info-item">
                <h3>Location</h3>
                <p>{profile.location}</p>
              </div>
              <div className="info-item">
                <h3>Email</h3>
                <p>{profile.email}</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/400x500?text=About+Me" alt="About Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;