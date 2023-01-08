import React from 'react';
import Info from '../About/Info';
import './about.css';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <div alt="" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            React.js Frontend developer, I create web pages with UI / UX user
            interface, Have a good knowladge of the JavaScript,React and Redux ,
            I'm the proud ofs my teachers
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
