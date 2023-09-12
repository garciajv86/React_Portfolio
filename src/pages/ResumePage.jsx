import React from "react";
import "../styles/ResumePage.css"; //* Import CSS for ResumePage

//* Grabbing the resumes pdf version for download and the jpeg versions for displaying
export default function ResumePage() {
  const pdfUrl = "/Resume.pdf";
  // const imageUrl = "/Page1.png";
  // const imageUrl2 = "/Page2.png";

  return (
    <div id="resume">
      <div className="container">
        <h1 className="sub-title">My Resume</h1>
        {/* <div className="image-container">
          <img src={imageUrl} alt="Resume" className="resume-image" />
          <img src={imageUrl2} alt="Resume" className="resume-image" />
        </div> */}
        <a
          href={pdfUrl}
          download="Joshua Garcia's Resume.pdf"
          className="btn btn2"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
