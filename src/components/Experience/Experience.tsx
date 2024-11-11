import { useState } from "react";
import experiences from "./experiences";
import { Box, Fade } from "@mui/material";

function Experience() {
  const [details, showDetails] = useState(false);
  const handleChange = () => {
    showDetails(!details);
  };
  return (
    <>
      <h1>Experience</h1>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h3>
            <a
              href={experience.url}
              target="_blank"
              className="company"
              style={{ color: "white", textDecoration: "underline" }}
            >
              {experience.company}
            </a>
          </h3>
          <h3>{experience.title}</h3>
          <h3>{experience.location}</h3>
          <h3>{experience.date}</h3>
          <h3>{experience.type}</h3>
          <button onClick={handleChange}>
            {details ? "Hide" : "Show"} Details
          </button>
          <Box
            sx={{
              display: "flex",
              height: details ? "150px" : "0px",
              overflow: "hidden",
              transition: "height 300ms ease",
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
      ))}
    </>
  );
}

export default Experience;
