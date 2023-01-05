import React from 'react';
import './home.css';
import Social from './HomeSocial.jsx';
import Datas from './HomeData.jsx';

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home_img"></div>
          <Datas />
        </div>
      </div>
    </section>
  );
}

export default Home;
