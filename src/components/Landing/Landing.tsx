import { useState } from "react";
import githubLogo from "../../assets/github-icon.svg";
import linkedinLogo from "../../assets/linkedin-icon.svg";
import cvLogo from "../../assets/resume-icon.png";
import cvPDF from "../../assets/CV.pdf";
import emailLogo from "../../assets/email-icon.png";
import locationPin from "../../assets/location-pin.svg";
import "../../App.css";

function Landing() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hi! I'm Martynas Jascemskas </h1>
      <span>
        Full Stack Developer ready to work on interesting and challenging
        projects
      </span>
      <h3>
        <img src={locationPin} className="pin" alt="" /> Dublin, Ireland
      </h3>

      <div>
        <a
          href="https://www.linkedin.com/in/martynas-jascemskas/"
          target="_blank"
        >
          <img
            src={linkedinLogo}
            className="logo linkedin"
            alt="LinkedIn Logo"
          />
        </a>
        <a href="https://github.com/martynasjascemskas" target="_blank">
          <img src={githubLogo} className="logo github" alt="GitHub logo" />
        </a>
        <a href={cvPDF} target="_blank">
          <img src={cvLogo} className="logo cv" alt="CV logo" />
        </a>
        <a href="mailto:martis.jascemskas@gmail.com" target="_blank">
          <img src={emailLogo} className="logo email" alt="Email logo" />
        </a>
      </div>
    </>
  );
}

export default Landing;
