import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Josh_Logo.png";
import "../styles/NavBar.css";

//* Navigation bar to display on all pages
const NavBar = () => {
  return (
    <nav>
      <img src={logo} className="logo" alt="Logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
