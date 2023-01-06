import React from 'react';
import AboutImg from '../../assets/about.jpg';
import './about.css';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">

        <div className="about__data">
        <img src={AboutImg} alt="" className="about__img" />
        </div>
      </div>
    </section>
  );
}

export default About;
