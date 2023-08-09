import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './header.css';

function Header() {
  const [Toggle, showMenu] = useState(false);

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    showMenu(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo" onClick={handleLinkClick}>
          Khursanov
        </Link>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link active-link"
                onClick={handleLinkClick}
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link" onClick={handleLinkClick}>
                <i className="uil uil-user nav__icon"></i>
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/skills"
                className="nav__link"
                onClick={handleLinkClick}
              >
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/services"
                className="nav__link"
                onClick={handleLinkClick}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/portfolio"
                className="nav__link"
                onClick={handleLinkClick}
              >
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                className="nav__link"
                onClick={handleLinkClick}
              >
                <i className="uil uil-message nav__icon"></i>
                Contact
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
