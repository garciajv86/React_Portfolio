import { useState } from "react";
import "../styles/ContactPage.css"; //* Import CSS for ContactPage

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError(false);
  };

  const handleNameBlur = () => {
    if (name === "") {
      setNameError(true);
    }
  };

  const handleEmailBlur = () => {
    if (email === "") {
      setEmailError(true);
    } else if (!isValidEmail(email)) {
      setEmailError(true);
    }
  };

  const handleMessageBlur = () => {
    if (message === "") {
      setMessageError(true);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      setNameError(true);
      return;
    }

    if (email === "") {
      setEmailError(true);
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }
    if (message === "") {
      setMessageError(true);
      return;
    }

    setSubmitSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i className="fa-solid fa-paper-plane"></i> garciajv86@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-square-phone"></i> 620-640-5306
            </p>
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
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                value={name}
                onChange={handleNameChange}
                onBlur={handleNameBlur}
                required
              />
              {nameError && <div className="error">Name is required</div>}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                required
              />
              {emailError && (
                <div className="error">
                  {email === "" ? "Email is required" : "Invalid email"}
                </div>
              )}
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
                value={message}
                onChange={handleMessageChange}
                onBlur={handleMessageBlur}
                required
              ></textarea>
              {messageError && <div className="error">Message is required</div>}
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
            {submitSuccess && (
              <p className="success-message">Form submitted successfully!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
