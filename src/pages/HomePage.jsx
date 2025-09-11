// import React from "react";
import "../styles/HomePage.css";
import mobileBg from "../assets/images/MobileBackground.png";

const HomePage = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header-text">
          <p>Full-Stack Web Developer</p>
          <h1>
            Hi, I'm <span>Joshua</span>
            <br />
            Garcia From Kansas
          </h1>
        </div>
        <img src={mobileBg} alt="Background" className="mobile-hero" />
      </div>
    </div>
  );
};

export default HomePage;
