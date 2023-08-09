import React from 'react';
import './scrollup.css';

function ScrollUp() {
  window.addEventListener('scroll', function () {
    const scrollup = document.querySelector('.scrollup');
    this.scrollY >= 560
      ? scrollup.classList.add('show-scroll')
      : scrollup.classList.remove('show-scroll');
  });
  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}

export default ScrollUp;
