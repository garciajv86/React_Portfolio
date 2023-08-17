import React from "react";

const Project = ({ title, description, image, link }) => {
  return (
    <div className="work">
      <img src={image} alt={title} />
      <div className="layer">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>
          <i className="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Project;

