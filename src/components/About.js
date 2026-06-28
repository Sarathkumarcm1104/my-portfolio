import React from 'react';
import { profile } from '../data/profile';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Left column: bio + photo */}
          <div className="about-main">
            <div className="about-text">
              <p className="about-lead">{profile.bio}</p>
              <p>I specialize in creating modern, responsive websites that are not only visually appealing but also highly functional and user-friendly. My approach combines clean code with innovative design solutions to deliver exceptional user experiences.</p>
            </div>

            <div className="about-image">
              <div className="about-image-placeholder">
                <i className="fas fa-code"></i>
                <span>Building modern web experiences</span>
              </div>
            </div>
          </div>

          {/* Right column: quick facts sidebar */}
          <aside className="about-sidebar" aria-label="Quick facts">
            <div className="sidebar-card">
              <div className="sidebar-row">
                <span className="sidebar-icon"><i className="fas fa-map-marker-alt"></i></span>
                <div>
                  <span className="sidebar-label">Location</span>
                  <span className="sidebar-value">{profile.location}</span>
                </div>
              </div>

              <div className="sidebar-row">
                <span className="sidebar-icon"><i className="fas fa-envelope"></i></span>
                <div>
                  <span className="sidebar-label">Email</span>
                  <a href={`mailto:${profile.email}`} className="sidebar-value sidebar-link">{profile.email}</a>
                </div>
              </div>

              <div className="sidebar-row">
                <span className="sidebar-icon"><i className="fas fa-phone"></i></span>
                <div>
                  <span className="sidebar-label">Phone</span>
                  <a href={`tel:${profile.phone}`} className="sidebar-value sidebar-link">{profile.phone}</a>
                </div>
              </div>

              <div className="sidebar-divider" />

              <div className="sidebar-block">
                <span className="sidebar-label"><i className="fas fa-language"></i> Languages</span>
                <div className="tags-list">
                  {profile.languages.map((language, index) => (
                    <span key={index} className="tag language-tag">{language}</span>
                  ))}
                </div>
              </div>

              <div className="sidebar-block">
                <span className="sidebar-label"><i className="fas fa-futbol"></i> Hobbies</span>
                <div className="tags-list">
                  {profile.hobbies.map((hobby, index) => (
                    <span key={index} className="tag hobby-tag">{hobby}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom row: education / tools / interests */}
        <div className="about-details">
          <div className="detail-card">
            <h3 className="detail-title">
              <i className="fas fa-graduation-cap"></i> Education
            </h3>
            <ul className="education-list">
              {profile.education.map((edu, index) => (
                <li key={index} className="education-item">
                  <div className="education-head">
                    <span className="education-degree">{edu.degree}</span>
                    <span className="education-year">{edu.year}</span>
                  </div>
                  <span className="education-school">{edu.institution}</span>
                  {edu.cgpa && <span className="education-meta">CGPA: {edu.cgpa}</span>}
                  {edu.percentage && <span className="education-meta">Percentage: {edu.percentage}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-card">
            <h3 className="detail-title">
              <i className="fas fa-tools"></i> Tools &amp; Technologies
            </h3>
            <div className="tags-list">
              {profile.tools.map((tool, index) => (
                <span key={index} className="tag tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <h3 className="detail-title">
              <i className="fas fa-bullseye"></i> Areas of Interest
            </h3>
            <div className="tags-list">
              {profile.areasOfInterest.map((interest, index) => (
                <span key={index} className="tag interest-tag">{interest}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
