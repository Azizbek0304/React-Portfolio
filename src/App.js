import React from 'react';
import Header from './componets/Header';
import Home from './componets/Home';
import './style.css';

export default function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}
