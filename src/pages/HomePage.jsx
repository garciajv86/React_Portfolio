import React from 'react';

const HomePage = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1>Welcome to My Portfolio</h1>
            <p>
              I am a web developer with experience building single-page applications using React.
              This portfolio showcases some of my recent projects and skills. Feel free to explore!
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="/assets/home-avatar.jpg" // Update with the actual image path
              alt="My Avatar"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;