import { useState } from "react";
import experiences from "./experiences";
import { Box, Fade } from "@mui/material";

function Experience() {
  const [details, showDetails] = useState(false);
  const handleChange = () => {
    showDetails(!details);
  };
  return (
    <div className="flex flex-col w-full relative items-center justify-center text-center md:gap-6 lg:text-left xl:gap-8 2xl:gap-10 border-t-4 border-zinc-800 py-24">
      <h1 className="font-bold text-5xl">Experience</h1>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="w-8/12 border-4 bg-[#141414] border-zinc-500/20 rounded-xl p-4 hover:bg-[#252525] duration-100"
        >
          <div className="flex justify-between w-full">
            <div>
              <span className="font-extrabold text-xl">
                <a
                  href={experience.url}
                  target="_blank"
                  className="hover:underline underline-offset-2"
                >
                  {experience.company}
                </a>
              </span>
              <span className="font-semibold text-lg block">
                {experience.title}
              </span>
            </div>
            <div className="flex flex-col items-end text-right font-medium">
              <span>{experience.date}</span>
              <span>{experience.location}</span>
              <span>{experience.type}</span>
            </div>
          </div>
          <div className="text b w-full max-w-6xl">
            <button
              onClick={handleChange}
              className="underline underline-offset-4 mt-1.5 w-fit text-lg"
            >
              {details ? "Hide" : "Show"} Details
            </button>
            <Box
              sx={{
                display: "flex",
                height: details ? "150px" : "0px",
                maxWidth: "100%",
                overflow: "auto",
                transition: "height 500ms ease",
                scrollbarWidth: "none",
              }}
            >
              <Fade in={details}>
                <ul className="list-disc list-inside leading-relaxed ms-[1rem]">
                  {experience.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </Fade>
            </Box>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
