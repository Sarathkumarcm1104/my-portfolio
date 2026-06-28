import React from 'react';
import { skills } from '../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category} className="skills-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skillsList.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-progress">
                      <div
                        className="skill-progress-bar"
                        style={{ width: `${skill.level}%` }}
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