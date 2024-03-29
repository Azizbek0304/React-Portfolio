import React from 'react';
import Additional from './additional';
import Frontend from './frontend';
import './skills.css';

function SkillsComponent() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Additional />
      </div>
    </section>
  );
}

export default SkillsComponent;
