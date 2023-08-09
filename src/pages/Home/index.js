import React from 'react';
import HomeComponent from '../../components/HomeComp';
import About from '../../components/About';
import Services from '../../components/Services';
import Qualification from '../../components/Qualification';

function Home() {
  return (
    <main>
      <HomeComponent />
      <About />
      <Qualification />
      <Services />
    </main>
  );
}

export default Home;
