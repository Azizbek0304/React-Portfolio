import React from 'react';
import './home.css';
import Social from './HomeSocial.jsx';
import Datas from './HomeData.jsx';
import ScrollDown from './ScrollDown.jsx';

function HomeComponent() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Datas />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default HomeComponent;
