import githubLogo from "../../assets/github-icon.svg";
import linkedinLogo from "../../assets/linkedin-icon.svg";
import cvLogo from "../../assets/resume-icon.png";
import cvPDF from "../../assets/CV.pdf";
import emailLogo from "../../assets/email-icon.png";
import locationPin from "../../assets/location-pin.svg";
import portrait from "../../assets/portraitportfolio.png";

function Landing() {
  return (
    <div className="flex items-center w-full h-screen -top-[10%] relative justify-center flex-wrap text-center md:flex-col md:gap-10 lg:flex-row lg:text-left xl:gap-24 2xl:gap-36">
      <img
        src={portrait}
        className="w-80 rounded-lg shadow-2xl"
        alt="portrait"
      />
      <div className="relative">
        <p className="font-medium text-xl">
          Hello! I'm
          <span className="block font-bold text-5xl md:text-7xl">
            Martynas Jascemskas
          </span>
        </p>
        <p className="font-medium mt-4 w-2/3 mx-auto text-center lg:text-left lg:w-auto">
          A <span className="font-bold text-lg">Full Stack Developer</span>{" "}
          ready to work on interesting and <br />
          challenging projects using modern technologies
        </p>
        <div className="relative right-5 mt-4 flex gap-4 justify-center lg:justify-start">
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

        <div className="flex items-center justify-center absolute -bottom-10 left-0 right-0 gap-1 fill-red-500 lg:top-0 lg:bottom-auto lg:right-0 lg:left-auto hover:scale-125 duration-200">
          <img src={locationPin} className="h-8 size-6" alt="" />
          <p className="font-semibold">Based in Dublin, </p>
          <p className="font-medium">Ireland</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
