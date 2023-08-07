import React from 'react';
import Header from './componets/Header';
import Home from './componets/Home';
import About from './componets/About';
import Skills from './componets/Skills';
import Services from './componets/Services';
import Contact from './componets/Contact';
import Footer from './componets/Footer';
import ScrollUp from './componets/ScrollUp';
import AnimatedCursor from './componets/AnimatedCursor';
import Qualification from './componets/Qualification';
import './style.css';

export default function App() {
  const shouldShowCursor = window.innerWidth > 992;

  return (
    <>
      {shouldShowCursor && <AnimatedCursor />}
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}
