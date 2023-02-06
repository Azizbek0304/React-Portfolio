import React from 'react';
import Header from './componets/Header';
import Home from './componets/Home';
import About from './componets/About';
import Skills from './componets/Skills';
import Services from './componets/Services';
import Contact from './componets/Contact';
import Footer from './componets/Footer';
import ScrollUp from './componets/ScrollUp';
import Qualification from './componets/Qualification';
import './style.css';

export default function App() {
  return (
    <>
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

// https://join.com/companies/deepsign/6770603-frontend-developer-react?pid=d7cb2e8e859c62cd7f75
