import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Josh_Logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src={logo} className="logo" alt="Logo" />
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

