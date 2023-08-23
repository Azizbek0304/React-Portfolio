import React from 'react';
import ProjectGallery from '../../components/ProjectGallery';
import './portfolio.css';

const websiteUrls = [
  'https://codepen.io/Leader-the-bashful/pen/rNoaayG',
  'https://codepen.io/Leader-the-bashful/pen/rNoaqob',
  'https://codepen.io/Leader-the-bashful/pen/wvRwyNQ',
];

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio page.</p>
      </header>

      <main className="main">
        <h2>Projects</h2>
        <ProjectGallery websiteUrls={websiteUrls} />
      </main>
    </div>
  );
};

export default App;
