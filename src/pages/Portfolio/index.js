import React from 'react';
import ProjectGallery from '../../components/ProjectGallery';
import './portfolio.css';

const websiteUrls = [
  'https://codepen.io/Leader-the-bashful/pen/rNoaayG',
  'https://codepen.io/Leader-the-bashful/pen/rNoaqob',
  'https://codepen.io/Leader-the-bashful/pen/wvRwyNQ',
];

const Portfolio = () => {
  return (
    <main className="main">
      <h2>Projects</h2>
      <ProjectGallery websiteUrls={websiteUrls} />
    </main>
  );
};

export default Portfolio;
