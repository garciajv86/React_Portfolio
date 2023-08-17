import React from "react";

const Project = ({ title, description, image, link, repoLink }) => {
  return (
    <div className="work">
      {/* Project Card */}
      <img src={image} alt={title} />
      <div className="layer">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>
          <i className="fa-solid fa-up-right-from-square"></i>
        </a>
        {/* GitHub Repo Link */}
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          Repo
        </a>
      </div>
    </div>
  );
};

export default Project;
