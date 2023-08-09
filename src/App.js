import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
import AnimatedCursor from './components/AnimatedCursor'; // Import the AnimatedCursor component
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Qualification from './pages/Qualification';
import Contact from './pages/Contact';
import './style.css';

export default function App() {
  const shouldShowCursor = window.innerWidth > 992;
  return (
    <>
      {shouldShowCursor && <AnimatedCursor />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        {/* <Route path="/services" element={<Services />} />
          <Route path="/qualification" element={<Qualification />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
      <ScrollUp />
    </>
  );
}
