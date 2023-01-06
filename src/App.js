import React from 'react';
import Header from './componets/Header';
import Home from './componets/Home';
import About from './componets/About';
import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
}
