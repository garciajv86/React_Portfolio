import React, { useState } from "react";
import "../styles/AboutMePage.css";
import "../components/Tabs.jsx";
import Background from "../assets/images/Background.png";

export default function AboutMePage() {
  const [activeTab, setActiveTab] = useState("skills"); //* State to track active tab

  //* Function to handle tab clicks
  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={Background} alt="" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Hi, my name is Joshua but I go by Josh, I am an aspiring fullstack
              web dev with experience in HTML and CSS! Of course those skills I
              will be advancing on as well as learning Javascript and much more,
              and as I do this page will be updated with those skills and this
              web page will obviously become more advanced and interactive,
              demonstrating my web developing skills! I am also an aspiring
              business man with the goal to either run a company or create my
              own one day, bringing opportunity to the community and tech jobs
              to the world!
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => openTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "experience" ? "active-link" : ""
                }`}
                onClick={() => openTab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => openTab("education")}
              >
                Education
              </p>
            </div>
            {/* Render the appropriate tab content based on activeTab */}
            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              {/* Skills tab content */}
              <ul>
                <li>
                  <span>MERN Stack</span>
                  <br />
                  Designing Full-Stack Websites
                </li>
                <li>
                  <span>MySQL</span>
                  <br />
                  Designing/Implementing MySQL Databases
                </li>
                <li>
                  <span>MongoDB</span>
                  <br />
                  Designing/Implementing MongoDB Databases
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "experience" ? "active-tab" : ""
              }`}
              id="experience"
            >
              {/* Experience tab content */}
              <ul>
                <li>
                  <span>03/2023 - 09/2023</span>
                  <br />
                  Full-Stack Web Dev Training at The University of Kansas(KU)
                </li>
                <li>
                  <span>2022 - 2023</span>
                  <br />
                  Programming in Python Training on Udemy
                </li>
                <li>
                  <span>2011</span>
                  <br />
                  Strategic Team Building Skills at Garden City Community
                  College(GCCC)
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              {/* Education tab content */}
              <ul>
                <li>
                  <span>2023</span>
                  <br />
                  Full-Stack Web Dev Training at The University of Kansas(KU)
                </li>
                <li>
                  <span>2023</span>
                  <br />
                  Full-Stack Web Development Certificate from The University of
                  Kansas(KU)
                </li>
                <li>
                  <span>2022</span>
                  <br />
                  Programming in Python Training on Udemy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
