import React from 'react';
import ProjectGallery from '../../components/ProjectGallery';
import './portfolio.css';

const websiteUrls = [
  'https://codepen.io/Leader-the-bashful/pen/VwqKZxX',
  'https://codepen.io/Leader-the-bashful/pen/oNJbjLN',
  'https://codepen.io/Leader-the-bashful/pen/OJrMVaN',
  'https://codepen.io/Leader-the-bashful/pen/mdaVJLb',
  'https://codepen.io/Leader-the-bashful/pen/rNoaqob',
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
