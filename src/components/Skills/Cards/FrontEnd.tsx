import {
  Axios,
  Css,
  Html,
  Javascript,
  MaterialUI,
  NextJS,
  React,
  Tailwind,
  TypeScript,
  Vite,
} from "../TechnologyAssets/TechnologyIcons";
import DisplayTech from "./DisplayTech";

const FrontEnd = () => {
  return (
    <div className="bg-[#141414] hover:bg-[#252525] duration-100 border-4 border-zinc-500/20 rounded-xl py-4 px-8 w-4/5 lg:w-2/5 bg-opacity-80">
      <h2 className="mb-6 font-bold text-2xl">Front-End</h2>
      <p className="text-[#838383] font-medium">
        As an upcoming Junior Developer, I utilise popular frameworks and
        libraries in the industry
      </p>
      <p className="text-[#838383] font-medium">
        These frameworks often provide helpful documentation, making them easy
        to learn and use.
      </p>
      <div className="flex gap-4 items-center flex-wrap mt-4 w-3/5">
        <DisplayTech name="HTML" Icon={Html} />
        <DisplayTech name="CSS" Icon={Css} />
        <DisplayTech name="JavaScript" Icon={Javascript} />
        <DisplayTech name="TypeScript" Icon={TypeScript} />
        <DisplayTech name="React" Icon={React} />
        <DisplayTech name="NextJS" Icon={NextJS} />
        <DisplayTech name="Axios" Icon={Axios} />
        <DisplayTech name="MaterialUI" Icon={MaterialUI} />
        <DisplayTech name="Vite" Icon={Vite} />
        <DisplayTech name="Tailwind" Icon={Tailwind} />
      </div>
    </div>
  );
};

export default FrontEnd;
