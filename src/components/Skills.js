import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/skills';
import './Skills.css';

// Maps a category label to a Font Awesome icon. Keep keys in sync with skills.js.
const categoryIcons = {
  Frontend: 'fa-solid fa-window-maximize',
  Backend: 'fa-solid fa-server',
  Mobile: 'fa-solid fa-plug', // represents API integration, not native dev
  Tools: 'fa-solid fa-toolbox',
  Design: 'fa-solid fa-palette',
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (!('IntersectionObserver' in window)) {
      setAnimate(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category} className="skills-category">
              <div className="category-header">
                <span className="category-icon" aria-hidden="true">
                  <i className={categoryIcons[category] || 'fa-solid fa-circle'}></i>
                </span>
                <h3 className="category-title">{category}</h3>
              </div>

              <div className="skills-list">
                {skillsList.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-progress">
                      <div
                        className={`skill-progress-bar ${animate ? 'is-visible' : ''}`}
                        style={{ '--skill-level': `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;