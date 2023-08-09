import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
import AnimatedCursor from './components/AnimatedCursor';
import Home from './pages/Home'; // Import the Home page component
import About from './pages/About'; // Import the About page component
import Skills from './pages/Skills'; // Import the Skills page component
import Services from './pages/Services'; // Import the Services page component
import Qualification from './pages/Qualification'; // Import the Qualification page component
import Contact from './pages/Contact'; // Import the Contact page component
import './style.css';

export default function App() {
  const shouldShowCursor = window.innerWidth > 992;

  return (
    <Router>
      {shouldShowCursor && <AnimatedCursor />}
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" exact component={<Home />} />
          {/* <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/services" component={Services} />
          <Route path="/qualification" component={Qualification}
          <Route path="/contact" component={Contact} /> */}
        </Routes>
      </main>
      <Footer />
      <ScrollUp />
    </Router>
  );
}
