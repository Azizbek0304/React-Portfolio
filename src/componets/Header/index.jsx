import React from 'react';
import './header.css';

function Header() {
  return (
    <header classname="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Smith
        </a>
        <div className="nav__menu">
          <ul className="nav_list grid">
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil- nav__icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
