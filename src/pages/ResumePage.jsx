import React from 'react';
import '../styles/ResumePage.css'; // Import your CSS for ResumePage

export default function ResumePage() {
  return (
    <div id="resume">
      <div className="container">
        <h1 className="sub-title">My Resume</h1>
        <a href="../assets/images/Resume.pdf" download className="btn btn2">
          Download Resume
        </a>
      </div>
    </div>
  );
}
