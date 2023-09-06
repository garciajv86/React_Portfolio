import React from "react";
//* Import CSS file for styling
import "../styles/ProjectsPage.css";
//* Import the Projects Component and the Data
import Project from "../components/Project";
import projects from "../data/Projects.js";

//* Map through All of my projects
export default function ProjectsPage() {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <>
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                repoLink={project.repoLink}
              />
            ))}
          </>
        </div>
        <a href="#" className="btn">
          See more
        </a>
      </div>
    </div>
  );
}
