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
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/400x500?text=About+Me" alt="About Me" />
          </div>
          <div className="about-info">
            <div className="info-item">
              <h3><i className="fas fa-clock"></i> Availability</h3>
              <p>Available for freelance projects</p>
            </div>
            <div className="info-item">
              <h3><i className="fas fa-map-marker-alt"></i> Location</h3>
              <p>{profile.location}</p>
            </div>
            <div className="info-item contact-info">
              <h3><i className="fas fa-envelope"></i> Contact</h3>
              <p>
                <a href={`mailto:${profile.email}`}><i className="fas fa-envelope"></i> {profile.email}</a>
              </p>
              <p><a href={`tel:${profile.phone}`}><i className="fas fa-phone"></i> {profile.phone}</a></p>
            </div>
            <div className="info-item">
              <h3><i className="fas fa-graduation-cap"></i> Education</h3>
              <div className="education-list">
                {profile.education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <h4>{edu.degree}</h4>
                    <p><strong>{edu.institution}</strong> ({edu.year})</p>
                    {edu.cgpa && <p>CGPA: {edu.cgpa}</p>}
                    {edu.percentage && <p>Percentage: {edu.percentage}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="info-item">
              <h3><i className="fas fa-birthday-cake"></i> Date of Birth</h3>
              <p>{profile.dateOfBirth}</p>
            </div>
            <div className="info-item">
              <h3><i className="fas fa-venus-mars"></i> Gender</h3>
              <p>{profile.gender}</p>
            </div>
            <div className="info-item">
              <h3><i className="fas fa-language"></i> Languages</h3>
              <div className="tags-list">
                {profile.languages.map((language, index) => (
                  <span key={index} className="tag language-tag">{language}</span>
                ))}
              </div>
            </div>
            <div className="info-item">
              <h3><i className="fas fa-futbol"></i> Hobbies</h3>
              <div className="tags-list">
                {profile.hobbies.map((hobby, index) => (
                  <span key={index} className="tag hobby-tag">{hobby}</span>
                ))}
              </div>
            </div>
            <div className="info-item">
              <h3><i className="fas fa-tools"></i> Tools & Technologies</h3>
              <div className="tags-list">
                {profile.tools.map((tool, index) => (
                  <span key={index} className="tag tool-tag">{tool}</span>
                ))}
              </div>
            </div>
            <div className="info-item">
              <h3><i className="fas fa-lightbulb"></i> Soft Skills</h3>
              <div className="tags-list">
                {profile.softSkills.map((skill, index) => (
                  <span key={index} className="tag skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="info-item">
              <h3><i className="fas fa-bullseye"></i> Areas of Interest</h3>
              <div className="tags-list">
                {profile.areasOfInterest.map((interest, index) => (
                  <span key={index} className="tag interest-tag">{interest}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;