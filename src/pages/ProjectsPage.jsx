import React from "react";
import "../styles/ProjectsPage.css"; //* Import the CSS file for styling
import project1Image from "../assets/images/work-1.png";
import project2Image from "../assets/images/work-2.png";
import project3Image from "../assets/images/work-3.png";

//* All 6 of my projects
export default function ProjectsPage() {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src={project1Image} alt="Project 1" />
            <div className="layer">
              <h3>Sunset Sunrise Times</h3>
              <p>
                The app can Show you the sunset and sunrise times based on your
                location and where you plan to go.
              </p>
              <a href="https://garciajv86.github.io/SunsetSunriseTimes/">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={project2Image} alt="Project 2" />
            <div className="layer">
              <h3>Horiseon</h3>
              <p>
                A semantic HTML SEO site with clickable links to take you to the
                corresponding section to learn more about the topic.
              </p>
              <a href="https://garciajv86.github.io/Horiseon/">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={project3Image} alt="Project 3" />
            <div className="layer">
              <h3>Weather Dashboard</h3>
              <p>
                This app is a 5 day weather forecast that allows you to type in
                a city name to get the 5 day forecast for that city.
              </p>
              <a href="https://garciajv86.github.io/Weather-Dashboard/">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={project1Image} alt="Project 1" />
            <div className="layer">
              <h3>JavaScript Fundamental Quiz</h3>
              <p>
                The app is a quiz specifically focused on the JavaScript
                Fundamentals.
              </p>
              <a href="https://garciajv86.github.io/javascript_fundamental_quiz/">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={project2Image} alt="Project 2" />
            <div className="layer">
              <h3>Work Day Scheduler</h3>
              <p>
                This app is a work day scheduler that plans and schedules around
                normal business hours that the user can interact with and add to
                their schedule.
              </p>
              <a href="https://garciajv86.github.io/work_day_scheduler/">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="work">
            <img src={project3Image} alt="Project 1" />
            <div className="layer">
              <h3>PWA Text Editor</h3>
              <p>
                This project is a PWA app that is a text editor users can
                download. There is an install button the user can use to install
                the app and use offline.
              </p>
              <a href="https://pwa-txt-edit0r-d8f3fd166bdc.herokuapp.com/">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
        //* Button at the moment doesn't do as expected, not sure what I want to do with it yet.
        <a href="#" className="btn">
          See more
        </a>
      </div>
    </div>
  );
}
