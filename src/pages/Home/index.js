import React from 'react';
import HomeComponent from '../../components/HomeComp';
import AboutComponent from '../../components/AboutComponent';
import Services from '../../components/Services';
import Qualification from '../../components/Qualification';

function Home() {
  return (
    <main>
      <HomeComponent />
      <AboutComponent />
      <Qualification />
      <Services />
    </main>
  );
}

export default Home;
