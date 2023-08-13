import React from 'react';
import '../styles/ResumePage.css'; // Import your CSS for ResumePage

export default function ResumePage() {

  const pdfUrl = "/Resume.pdf";
  const imageUrl = "/ResumeImage.jpeg";
  const imageUrl2 = "/ResumeImage2.jpeg";

  return (
    <div id="resume">
      <div className="container">
        <h1 className="sub-title">My Resume</h1>
        <div className="image-container">
          <img
            src={imageUrl}
            alt="Resume"
            className="resume-image"
          />
          <img
            src={imageUrl2}
            alt="Resume"
            className="resume-image"
          />
        </div>
        <a href={pdfUrl} download className="btn btn2">
          Download Resume
        </a>
      </div>
    </div>
  );
}
