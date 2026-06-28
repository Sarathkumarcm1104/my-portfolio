import React from 'react';
import { projects } from '../data/projects';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">My Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card project-card--${project.type}`}
            >
              <div className="project-image">
                <div className="project-image-placeholder" data-project-id={project.id}>
                  <span className="project-image-label">{project.title}</span>
                </div>
                {project.type === 'personal' && (
                  <span className="project-badge" title="Training / personal project">
                    <i className="fas fa-user-graduate"></i> Personal
                  </span>
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    {project.links.live && project.links.live !== '#' && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live demo">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                    {project.links.github && project.links.github !== '#' && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;