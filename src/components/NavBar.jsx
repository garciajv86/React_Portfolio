// import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Josh_Logo.png";
import "../styles/NavBar.css";

//* Navigation bar to display on all pages
const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} className="logo" alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <span>Resume</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
