import DisplayTech from "../../Skills/Cards/DisplayTech";
import {
  Javascript,
  MaterialUI,
  MongoDB,
  Nodejs,
  Postman,
  React,
  TypeScript,
  Express,
  Leaflet,
  Vite,
} from "../../Skills/TechnologyAssets/TechnologyIcons";
import img1 from "../../../assets/ProjectImg/main-page.png";
import img2 from "../../../assets/ProjectImg/main-page-info.png";
import img3 from "../../../assets/ProjectImg/area-select.png";
import img4 from "../../../assets/ProjectImg/area-select-info.png";
import img5 from "../../../assets/ProjectImg/house-select-info.png";
import Slider from "../../Slider/Slider";

const UKVisualiser = () => {
  const sliderImg = [
    { img: img1, alt: "Project Home Page" },
    { img: img2, alt: "Project Home Page Postcode Info" },
    { img: img3, alt: "Project Area Select Info" },
    { img: img4, alt: "Details in Postcode/Selected Area" },
    { img: img5, alt: "Individual House Sale Info" },
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:gap-10 2xl:gap-12">
      <div className="text-left w-full h-auto lg:w-1/3 2xl:w-2/5">
        <h2 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
          UK Housing Market Visualisation
        </h2>
        <p className="mt-4 text-md sm:text-lg">
          The biggest project I have worked on so far:
        </p>
        <ol className="list-disc ml-4 mt-1 text-md sm:text-lg">
          <li>
            Full Stack Web Application utilising various libraries and
            frameworks
          </li>
          <li>LeafletJS and Google Maps API Integration</li>
          <li>MongoDB Database Integration with 8+ million documents</li>
          <li>CRUD functionality</li>
          <li>REST API Development</li>
          <li>Website state management</li>
        </ol>
        <div className="flex flex-wrap gap-4 mt-4 mb-2">
          <DisplayTech name="MongoDB" Icon={MongoDB} />
          <DisplayTech name="Express" Icon={Express} />
          <DisplayTech name="React" Icon={React} />
          <DisplayTech name="NodeJS" Icon={Nodejs} />
          <DisplayTech name="JavaScript" Icon={Javascript} />
          <DisplayTech name="TypeScript" Icon={TypeScript} />
          <DisplayTech name="Postman" Icon={Postman} />
          <DisplayTech name="MaterialUI" Icon={MaterialUI} />
          <DisplayTech name="Vite" Icon={Vite} />
          <DisplayTech name="LeafletJS" Icon={Leaflet} />
        </div>
      </div>
      <div className="w-full lg:w-1/2 2xl:w-2/5 rounded-lg hover:scale-125 duration-100">
        <a href="https://github.com/martynasjascemskas/FYP" target="_blank">
          <Slider images={sliderImg} />
        </a>
      </div>
    </div>
  );
};

export default UKVisualiser;
