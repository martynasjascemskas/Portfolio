import DisplayTech from "../../Skills/Cards/DisplayTech";
import {
  Postman,
  React,
  TypeScript,
  NextJS,
  Java,
  PostgreSQL,
  Vercel,
  Python,
  Tailwind,
} from "../../Skills/TechnologyAssets/TechnologyIcons";
import img1 from "../../../assets/ProjectImg/eurostats-team.png";
import img2 from "../../../assets/ProjectImg/eurostats-team-stats.png";
import img3 from "../../../assets/ProjectImg/eurostats-player-search.png";
import Slider from "../../Slider/Slider";

const EuroStats = () => {
  const sliderImg = [
    { img: img1, alt: "Euro Stats Team Page" },
    { img: img2, alt: "Euro Stats Team Page Statistics" },
    { img: img3, alt: "Euro Stats Player Page" },
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:gap-10 2xl:gap-12">
      <div className="text-left w-full h-auto lg:w-1/3 2xl:w-2/5">
        <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
          Euro Stats
        </h2>
        <ol className="list-disc ml-4 mt-1 text-md sm:text-lg">
          <li>Full Stack Web Application using Java Spring Boot and NextJS</li>
          <li>
            Python Selenium WebDriver and Beautiful Soup for scraping data
          </li>
          <li>
            Cron job to run web scraper in order to update data every 7 days
          </li>
          <li>PostgreSQL Database Integration</li>
          <li>CRUD functionality</li>
          <li>REST API Development</li>
          <li>Website state management</li>
        </ol>
        <div className="flex gap-4 mt-4 mb-2">
          <DisplayTech name="React" Icon={React} />
          <DisplayTech name="TypeScript" Icon={TypeScript} />
          <DisplayTech name="Postman" Icon={Postman} />
          <DisplayTech name="Java" Icon={Java} />
          <DisplayTech name="NextJS" Icon={NextJS} />
          <DisplayTech name="PostgreSQL" Icon={PostgreSQL} />
          <DisplayTech name="Vercel" Icon={Vercel} />
          <DisplayTech name="Python" Icon={Python} />
          <DisplayTech name="Tailwind" Icon={Tailwind} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 2xl:w-2/5 rounded-lg hover:scale-125 duration-100">
        <a
          href="https://github.com/martynasjascemskas/EuroStats"
          target="_blank"
        >
          <Slider images={sliderImg} />
        </a>
      </div>
    </div>
  );
};

export default EuroStats;
