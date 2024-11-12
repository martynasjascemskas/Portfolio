import { useState } from "react";
import experiences from "./experiences";
import { Box, Fade } from "@mui/material";

function Experience() {
  const [details, showDetails] = useState(false);
  const handleChange = () => {
    showDetails(!details);
  };
  return (
    <div className="flex flex-col w-full relative items-center justify-center text-center md:gap-6 lg:text-left xl:gap-8 2xl:gap-10">
      <h1 className="font-bold text-5xl">Experience</h1>
      <hr className="w-8/12 border-t-4 border-gray-300" />
      {experiences.map((experience, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col max-w-5xl">
            <span className="font-extrabold text-2xl">
              <a href={experience.url} target="_blank" className="company">
                {experience.company}
              </a>
            </span>
            <span className="font-semibold text-lg">{experience.title}</span>
            <div>
              <button
                onClick={handleChange}
                className="underline underline-offset-4"
              >
                {details ? "Hide" : "Show"} Details
              </button>
              <Box
                sx={{
                  display: "flex",
                  height: details ? "150px" : "0px",
                  maxWidth: "75%",
                  overflow: "hidden",
                  transition: "height 500ms ease",
                }}
              >
                <Fade in={details}>
                  <ul>
                    {experience.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </Fade>
              </Box>
            </div>
          </div>
          <div className="flex flex-col items-end text-right">
            <span>{experience.date}</span>
            <span>{experience.location}</span>
            <span>{experience.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
