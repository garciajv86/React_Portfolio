import React from 'react';
import '../styles/ContactPage.css'; // Import your CSS for ContactPage

export default function ContactPage() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><i className="fa-solid fa-paper-plane"></i> garciajv86@gmail.com</p>
            <p><i className="fa-solid fa-square-phone"></i> 620-640-5306</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100050259774366">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://twitter.com/JoshuaGarcia86">
                <i className="fa-brands fa-twitter-square"></i>
              </a>
              <a href="https://www.instagram.com/joshua_garcia1986/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/joshua-garcia-924b24265/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
