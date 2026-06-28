import React from 'react';
import { profile } from '../data/profile';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p><strong>Location:</strong> {profile.location}</p>
            <div className="social-links">
              <h4>Find me on:</h4>
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
                <a href={profile.social.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form id="contactForm" netlify-netlify>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" id="subject" name="subject" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
            <p className="form-note">*(Note: This form uses Netlify Forms for demo purposes. In production, you would connect to your preferred backend service.)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;